const {urlValidation,urlSchema} = require('../../src/middleware/validation');
const {HTTPError} = require('../../src/utils/errors');
const Joi = require('joi');

describe('URL Validator', () => {
    it('Should return 400 error', async () => {
        const mockBody = {
            urlLink: 'http',
        };
        const mockReq = {
            body: mockBody,
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        urlValidation(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(400);
        expect(mockRes.json).toBeCalledWith({ message: "\"urlLink\" must be a valid uri" });
    });

    it('should validate create task request body', async () => {
        const mockBody = {
            "urlLink": "https://store-0001.s3.amazonaws.com/input.csv",
        };
        const mockReq = {
            body: mockBody,
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const next = jest.fn();
        await urlValidation(mockReq, mockRes, next);
        expect(next).toHaveBeenCalled();
    });

    it('should return 500 if error is not Joi error', async () => {
        jest.spyOn(urlSchema, 'validate').mockImplementation(() => {
            throw new HTTPError('Internal server error');
        });
       const mockBody = {
            name: 'run',
        };
        const mockReq = {
            body: mockBody,
        };
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const next = jest.fn().mockImplementation(() => {
            throw new HTTPError("error");
        });
        await urlValidation(mockReq, mockRes, next);
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.send).toHaveBeenCalledWith('Internal server error');
    });

});