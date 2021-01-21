import { expect } from 'chai';
import { User } from 'models/user.model';
import * as bcrypt from "bcrypt";
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Users', () => {
    describe('#getAll', () => {
        it('should return all users',(done) => {
            chai
            .request(API)
            .get('/users')
            .end((err: any, res: Response) => {
                let user: User = res.body[1];

                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(user.first_name).to.equals('lucas');
                expect(user.last_name).to.equals("guillotin");
                expect(user.age).to.equals(21);
                expect(
                    bcrypt.compareSync("1234",user.password)
                ).to.be.true;
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one user', (done) => {
            chai
            .request(API)
            .get('/users/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.first_name).to.equals('valentin');
                expect(res.body.last_name).to.equals("carrichon");
                expect(res.body.age).to.equals(22);
                expect(
                    bcrypt.compareSync("1234",res.body.password)
                ).to.be.true;
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one user on database', (done) => {
            chai
            .request(API)
            .post('/users')
            .send({
                email : "enzo@fonteneau.com",
                password : "fonteneau",
                first_name : "enzo",
                last_name : "fonteneau",
                tel_number : "0684312033",
                age : 85,
                adress : "134 Cours Saint-Louis",
                city_id : 40,
                astrologicalsign_id : 6
            })
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.first_name).to.equals('enzo');
                expect(res.body.last_name).to.equals("fonteneau");
                expect(res.body.age).to.equals(85);
                expect(res.body.city_id).to.equals(40);
                expect(
                    bcrypt.compareSync("fonteneau",res.body.password)
                ).to.be.true;
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one user', (done) => {
            chai
            .request(API)
            .put(`/users/${lastIdInserted}`)
            .send({
                email : "enzo@fonteneau.com",
                password : "bordeaux",
                first_name : "enzo",
                last_name : "fonteneau",
                tel_number : "0684312033",
                age : 96,
                adress : "315 Cours Balguerie Stuttenberg",
                city_id : 6,
                astrologicalsign_id : 6
            })
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.user.id).to.equals(lastIdInserted.toString());
                expect(res.body.user.first_name).to.equals('enzo');
                expect(res.body.user.last_name).to.equals("fonteneau");
                expect(res.body.user.age).to.equals(96);
                expect(res.body.user.city_id).to.equals(6);
                expect(
                    bcrypt.compareSync("bordeaux",res.body.user.password)
                ).to.be.true;
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one user', (done) => {
            chai
            .request(API)
            .delete(`/users/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});