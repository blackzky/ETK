console.log('Time!');
describe('Test', function () {
    it('test 1', function () {
        expect(true).toBeTruthy();
    });
    it('test 2', function () {
        expect(false).toBeFalsy();
    });
    it('test 3', function () {
        expect(false).toEqual(false);
    });
});
