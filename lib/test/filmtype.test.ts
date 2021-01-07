import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Film Types', () => {
    describe('#getAll', () => {
        it('should return all film types',(done) => {
            chai
            .request(API)
            .get('/filmtypes')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[2].name).to.equals('Thriller');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one film type', (done) => {
            chai
            .request(API)
            .get('/filmtypes/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Action');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one film type on database', (done) => {
            chai
            .request(API)
            .post('/filmtypes')
            .send({name: 'Muet'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Muet');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one film type', (done) => {
            chai
            .request(API)
            .put(`/filmtypes/${lastIdInserted}`)
            .send({name: 'Théâtre'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.filmType.id).to.equals(lastIdInserted.toString());
                expect(res.body.filmType.name).to.equals('Théâtre');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one film type', (done) => {
            chai
            .request(API)
            .delete(`/filmtypes/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});