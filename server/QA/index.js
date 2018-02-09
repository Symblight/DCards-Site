import chai from 'chai';
import chaiHtpp from 'chai-http';

import server from '../../app.dev';

let should = chai.should();
chai.use(chaiHtpp);