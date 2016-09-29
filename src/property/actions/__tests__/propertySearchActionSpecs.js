import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import {START_LAODING} from '../../../shared/actions/sharedActionTypes'

var propertySearchAction;
var dispatchStub;

test.beforeEach(()=> {
  const apiStub = {
    findProperties: () => {

    }
  };
  dispatchStub = sinon.sandbox.stub();
  propertySearchAction = proxyquire('../propertySearchActions', {
    '../../shared/api/propertiesApi': apiStub
  });
});

test.afterEach(() =>{
  sinon.restore();
});

test.skip('should dispatch startLoading action', t => {
  const searchAction = propertySearchAction.search('test');
  searchAction(dispatchStub);
  t.true(dispatchStub.withArgs({type:START_LAODING}).called)
});