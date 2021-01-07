import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Destinations', () => {
    describe('#getAll', () => {
        it('should return all destinations',(done) => {
            chai
            .request(API)
            .get('/destinations')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[3].name).to.equals('Royaume-Uni');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one destination', (done) => {
            chai
            .request(API)
            .get('/destinations/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Canada');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one destination on database', (done) => {
            chai
            .request(API)
            .post('/destinations')
            .send({name: 'Suisse'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Suisse');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one destination', (done) => {
            chai
            .request(API)
            .put(`/destinations/${lastIdInserted}`)
            .send({name: 'Islande'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.destination.id).to.equals(lastIdInserted.toString());
                expect(res.body.destination.name).to.equals('Islande');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one destination', (done) => {
            chai
            .request(API)
            .delete(`/destinations/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});