import test from 'ava';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

var propertiesApi;
var stubedFetch;

test.before(()=> {
  stubedFetch = sinon.stub();
  propertiesApi = proxyquire('../propertiesApi', {
    './fetchWrapper': {wrappedFetch: stubedFetch}
  });

});

test.after(() => {
  sinon.restore();
});

//AVA tests are run concurrently, which messes up our Sinon stubbing.
//So we need to run these test serially
test.cb.serial('call onSuccess with the right api response', t => {
  const request = {place_name: 'london'};
  stubedFetch.withArgs('http://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=london')
    .returns(Promise.resolve({response: 'test'}));
  propertiesApi.findProperties(request, (result)=> {
    t.is(result, 'test');
    t.end();
  });
});

test.cb.serial('call onFailure with the right error info', t => {
  const request = {place_name: 'london'};
  stubedFetch.withArgs('http://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=london')
    .throws(new Error('fail'));
  propertiesApi.findProperties(request, () => {}, (error)=> {
    t.is(error.message, 'fail');
    t.end();
  });
});