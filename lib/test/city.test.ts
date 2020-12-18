import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Cities', () => {
    describe('#getAll', () => {
        it('should return all cities',(done) => {
            chai
            .request(API)
            .get('/cities')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[42].name).to.equals('Aix en Provence');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one city', (done) => {
            chai
            .request(API)
            .get('/cities/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Lyon');
                expect(res.body.region.id).to.equals(1);
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one city on database', (done) => {
            chai
            .request(API)
            .post('/cities')
            .send({name: 'Bergerac', region_id: 10})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Bergerac');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one city', (done) => {
            chai
            .request(API)
            .put(`/cities/${lastIdInserted}`)
            .send({name: 'Périgueux', region_id: 4})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.city.id).to.equals(lastIdInserted.toString());
                expect(res.body.city.name).to.equals('Périgueux');
                expect(res.body.city.region_id).to.equals(4);
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one city', (done) => {
            chai
            .request(API)
            .delete(`/cities/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});