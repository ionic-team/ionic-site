System.register('ionic/util/test/util.spec', ['ionic/util'], function (_export) {
  'use strict';

  var util;

  _export('run', run);

  function run() {
    describe('extend', function () {
      it('should extend simple', function () {
        var obj = {
          a: '0',
          c: '0'
        };
        expect(util.extend(obj, {
          a: '1',
          b: '2'
        })).toBe(obj);
        expect(obj).toEqual({
          a: '1',
          b: '2',
          c: '0'
        });
      });
      it('should extend complex', function () {
        expect(util.extend({
          a: '0',
          b: '0'
        }, {
          b: '1',
          c: '1'
        }, {
          c: '2',
          d: '2'
        })).toEqual({
          a: '0',
          b: '1',
          c: '2',
          d: '2'
        });
      });
    });
    describe('defaults', function () {
      it('should simple defaults', function () {
        var obj = { a: '1' };
        expect(util.defaults(obj, {
          a: '2',
          b: '2'
        })).toBe(obj);
        expect(obj).toEqual({
          a: '1',
          b: '2'
        });
      });
      it('should complex defaults', function () {
        expect(util.defaults({
          a: '0',
          b: '0'
        }, {
          b: '1',
          c: '1',
          e: '1'
        }, {
          c: '2',
          d: '2'
        })).toEqual({
          a: '0',
          b: '0',
          c: '2',
          d: '2',
          e: '1'
        });
      });
    });
  }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {}
  };
});