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

test('call successHandler with the right api response', t => {
  const request = {place_name: 'london'};
  propertiesApi.findProperties(request);
  t.true(stubedFetch.withArgs('http://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=london').called);
});