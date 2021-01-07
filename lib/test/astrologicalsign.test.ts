import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Astrological Signs', () => {
    describe('#getAll', () => {
        it('should return all astrological signs',(done) => {
            chai
            .request(API)
            .get('/astrologicalsigns')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[2].name).to.equals('Gémeaux');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one astrological sign', (done) => {
            chai
            .request(API)
            .get('/astrologicalsigns/1')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(1);
                expect(res.body.name).to.equals('Bélier');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one astrological sign on database', (done) => {
            chai
            .request(API)
            .post('/astrologicalsigns')
            .send({name: 'Lièvre'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Lièvre');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one astrological sign', (done) => {
            chai
            .request(API)
            .put(`/astrologicalsigns/${lastIdInserted}`)
            .send({name: 'Tortue'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.astrologicalSign.id).to.equals(lastIdInserted.toString());
                expect(res.body.astrologicalSign.name).to.equals('Tortue');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one astrological sign', (done) => {
            chai
            .request(API)
            .delete(`/astrologicalsigns/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});