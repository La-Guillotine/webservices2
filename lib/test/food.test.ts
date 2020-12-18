import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Foods', () => {
    describe('#getAll', () => {
        it('should return all foods',(done) => {
            chai
            .request(API)
            .get('/foods')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[9].name).to.equals('Memphis');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one food', (done) => {
            chai
            .request(API)
            .get('/foods/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('McDo');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one food on database', (done) => {
            chai
            .request(API)
            .post('/foods')
            .send({name: 'Tripletta'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Tripletta');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one food', (done) => {
            chai
            .request(API)
            .put(`/foods/${lastIdInserted}`)
            .send({name: 'Léon de Bruxelles'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.food.id).to.equals(lastIdInserted.toString());
                expect(res.body.food.name).to.equals('Léon de Bruxelles');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one food', (done) => {
            chai
            .request(API)
            .delete(`/foods/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});