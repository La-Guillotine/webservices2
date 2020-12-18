import { expect } from 'chai';
const chai = require('chai');
// import * as App from '../index';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API = 'http://localhost:3001';
let lastIdInserted = 0;
describe('Animal', () => {
    describe('#getAll', () => {
        it('should return all animals',(done) => {
            chai
            .request(API)
            .get('/animals')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[1].name).to.equals('Chien');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one animal', (done) => {
            chai
            .request(API)
            .get('/animals/1')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Chat');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one animal on database', (done) => {
            chai
            .request(API)
            .post('/animals')
            .send({name: 'Dragon'})
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Dragon');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one animal', (done) => {
            chai
            .request(API)
            .put(`/animals/${lastIdInserted}`)
            .send({name: 'Couleuvre'})
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.animal.id).to.equals(lastIdInserted.toString());
                expect(res.body.animal.name).to.equals('Couleuvre');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one animal', (done) => {
            chai
            .request(API)
            .delete(`/animals/${lastIdInserted}`)
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});