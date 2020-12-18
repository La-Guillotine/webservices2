import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Sports', () => {
    describe('#getAll', () => {
        it('should return all sports',(done) => {
            chai
            .request(API)
            .get('/sports')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[4].name).to.equals('Badminton');
                expect(res.body[4].isTeamPlay).to.equals(0);
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one sport', (done) => {
            chai
            .request(API)
            .get('/sports/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Football');
                expect(res.body.isTeamPlay).to.equals(1);
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one sport on database', (done) => {
            chai
            .request(API)
            .post('/sports')
            .send({name: 'Quiddich', isTeamPlay: 1})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Quiddich');
                expect(res.body.isTeamPlay).to.equals(1);
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one sport', (done) => {
            chai
            .request(API)
            .put(`/sports/${lastIdInserted}`)
            .send({name: 'Water Polo', isTeamPlay: 1})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.sport.id).to.equals(lastIdInserted.toString());
                expect(res.body.sport.name).to.equals('Water Polo');
                expect(res.body.sport.isTeamPlay).to.equals(1);
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one sport', (done) => {
            chai
            .request(API)
            .delete(`/sports/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});