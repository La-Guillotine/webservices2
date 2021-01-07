import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Music Types', () => {
    describe('#getAll', () => {
        it('should return all music types',(done) => {
            chai
            .request(API)
            .get('/musictypes')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[5].name).to.equals('Slam');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one music type', (done) => {
            chai
            .request(API)
            .get('/musictypes/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Electro');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one music type on database', (done) => {
            chai
            .request(API)
            .post('/musictypes')
            .send({name: 'Techtonik'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Techtonik');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one music type', (done) => {
            chai
            .request(API)
            .put(`/musictypes/${lastIdInserted}`)
            .send({name: 'Anime'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.musicType.id).to.equals(lastIdInserted.toString());
                expect(res.body.musicType.name).to.equals('Anime');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one music type', (done) => {
            chai
            .request(API)
            .delete(`/musictypes/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});