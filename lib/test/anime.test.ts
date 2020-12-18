import { expect } from 'chai';
const chai = require('chai');
// import * as App from '../index';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API = 'http://localhost:3001';
let lastIdInserted = 0;

describe('Anime', () => {
    describe('#getAll', () => {
        it('should return all animes',(done) => {
            chai
            .request(API)
            .get('/animes')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[14].name).to.equals('My Hero Academia');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one anime', (done) => {
            chai
            .request(API)
            .get('/animes/1')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('One Piece');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one anime on database', (done) => {
            chai
            .request(API)
            .post('/animes')
            .send({name: 'The Rising of the Shield Hero'})
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('The Rising of the Shield Hero');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one anime', (done) => {
            chai
            .request(API)
            .put(`/animes/${lastIdInserted}`)
            .send({name: 'The Promised Neverland'})
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.anime.id).to.equals(lastIdInserted.toString());
                expect(res.body.anime.name).to.equals('The Promised Neverland');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one anime', (done) => {
            chai
            .request(API)
            .delete(`/animes/${lastIdInserted}`)
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});