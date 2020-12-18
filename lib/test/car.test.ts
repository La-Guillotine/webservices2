import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Cars', () => {
    describe('#getAll', () => {
        it('should return all cars',(done) => {
            chai
            .request(API)
            .get('/cars')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[3].name).to.equals('Clio 4');
                expect(res.body[3].brand).to.equals('Renault');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one car', (done) => {
            chai
            .request(API)
            .get('/cars/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Peugeot 207');
                expect(res.body.brand).to.equals('Peugeot');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one car on database', (done) => {
            chai
            .request(API)
            .post('/cars')
            .send({name: 'Infernus', brand: 'Pegassi'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Infernus');
                expect(res.body.brand).to.equals('Pegassi');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one car', (done) => {
            chai
            .request(API)
            .put(`/cars/${lastIdInserted}`)
            .send({name: 'Banshee', brand: 'Bravado'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.car.id).to.equals(lastIdInserted.toString());
                expect(res.body.car.name).to.equals('Banshee');
                expect(res.body.car.brand).to.equals('Bravado');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one car', (done) => {
            chai
            .request(API)
            .delete(`/cars/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});