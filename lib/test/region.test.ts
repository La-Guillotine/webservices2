import { expect } from 'chai';
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API: String = 'http://localhost:3001';
let lastIdInserted: Number = 0;

describe('Regions', () => {
    describe('#getAll', () => {
        it('should return all regions',(done) => {
            chai
            .request(API)
            .get('/regions')
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('array');
                expect(res.body[10].name).to.equals('Occitanie');
                done();
            });
        });
    });

    describe('#getOne', () => {
        it('should return one region', (done) => {
            chai
            .request(API)
            .get('/regions/2')
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.equals(2);
                expect(res.body.name).to.equals('Bourgogne-Franche-Comté');
                done();
            });
        });
    });

    describe('#Add', () => {
        it('should add one region on database', (done) => {
            chai
            .request(API)
            .post('/regions')
            .send({name: 'Guadeloupe'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equals('Guadeloupe');
                lastIdInserted = res.body.id;
                done();
            });
        });
    });

    describe('#UpdateOne', () => {
        it('should update one region', (done) => {
            chai
            .request(API)
            .put(`/regions/${lastIdInserted}`)
            .send({name: 'Martinique'})
            .end((err: any, res: any) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.be.an('object');
                expect(res.body.created).to.be.false;
                expect(res.body.region.id).to.equals(lastIdInserted.toString());
                expect(res.body.region.name).to.equals('Martinique');
                done();
            });
        });
    });

    describe('#DeleteOne', () => {
        it('should delete one region', (done) => {
            chai
            .request(API)
            .delete(`/regions/${lastIdInserted}`)
            .end((err: any, res: Response) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.equals(1);
                done();
            });
        });
    });
});