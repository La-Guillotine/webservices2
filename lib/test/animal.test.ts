import { Animal } from '../models/animal.model';
import { expect } from 'chai';
const chai = require('chai');
// import * as App from '../index';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const API = 'http://localhost:3001'

describe('Animal', () => {
    describe('#getAll', () => {
        it('should return all animals',() => {
            chai
            .request(API)
            .get('/animals')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                expect(res.body).to.have.length(18);
            });
        });
    });

    describe('#getOne', () => {
        it('should return one animal', async () => {
            let animal = (await Animal.findOne({
                where: { id: 1 }
            })).toJSON();

            expect(animal).not.null;
            expect(animal).to.be.an('object');
        });
    });
});

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });