import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('videogames', () => {
    describe('#getAll', () => {
        it('should return all videogames',(done) => {
            chai
            .request(API)
            .get('/videogames')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[14].name).to.equals('Detroit Become Human');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one videogame', (done) => {
            chai
            .request(API)
            .get('/videogames/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Fortnite');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one videogame on database', (done) => {
            chai
            .request(API)
            .post('/videogames')
            .send({name: 'Donganronppa'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Donganronppa');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one videogame', (done) => {
            chai
            .request(API)
            .put(`/videogames/${lastIdInserted}`)
            .send({name: 'Among Us'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.videogame.id).to.equals(lastIdInserted.toString());
                expect(res.body.videogame.name).to.equals('Among Us');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one videogame', (done) => {
            chai
            .request(API)
            .delete(`/videogames/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});