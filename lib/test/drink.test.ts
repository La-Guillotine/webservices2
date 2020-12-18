import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Drinks', () => {
    describe('#getAll', () => {
        it('should return all drinks',(done) => {
            chai
            .request(API)
            .get('/drinks')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[5].name).to.equals('Cidre');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one drink', (done) => {
            chai
            .request(API)
            .get('/drinks/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Coca Cola');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one drink on database', (done) => {
            chai
            .request(API)
            .post('/drinks')
            .send({name: 'Bière', isAlcoholised: 1})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Bière');
                expect(res.body.isAlcoholised).to.equals(1);
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one drink', (done) => {
            chai
            .request(API)
            .put(`/drinks/${lastIdInserted}`)
            .send({name: 'Whisky', isAlcoholised: 1})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.drink.id).to.equals(lastIdInserted.toString());
                expect(res.body.drink.name).to.equals('Whisky');
                expect(res.body.drink.isAlcoholised).to.equals(1);
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one drink', (done) => {
            chai
            .request(API)
            .delete(`/drinks/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});