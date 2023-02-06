const saveCompInfoS = require("../../src/service/saveCompInfo");
const {saveCompInfo} = require("../../src/controllers/saveCompInfo");

describe("Save company info controller", () => {
	it("should return an array of objects of company info", async () => {
		jest.spyOn(saveCompInfoS, "saveCompInfoService").mockResolvedValue([{id:1}]);
		const mockReq = {
			body : {
				urlLink: "https://ash"
			}
		};
		const mockRes = {
			json: jest.fn(),
			status: jest.fn().mockReturnThis(),
		};
		await saveCompInfo(mockReq, mockRes);
		expect(mockRes.status).toBeCalledWith(200);
		expect(mockRes.json).toBeCalledWith([{ id: 1 }]);
	});
	it("should return an array of objects of company info", async () => {
		jest.spyOn(saveCompInfoS, "saveCompInfoService").mockResolvedValue(null);
		const mockReq = {
			body : {
				urlLink: "https://ash"
			}
		};
		const mockRes = {
			json: jest.fn(),
			status: jest.fn().mockReturnThis(),
		};
		await saveCompInfo(mockReq, mockRes);
		expect(mockRes.status).toBeCalledWith(404);
		expect(mockRes.json).toBeCalledWith();
	});
	it("should return an array of objects of company info", async () => {
		jest.spyOn(saveCompInfoS, "saveCompInfoService").mockRejectedValue(null);
		const mockReq = {
			body : {
				urlLink: "https://ash"
			}
		};
		const mockRes = {
			json: jest.fn(),
			status: jest.fn().mockReturnThis(),
		};
		await saveCompInfo(mockReq, mockRes);
		expect(mockRes.status).toBeCalledWith(500);
		expect(mockRes.json).toBeCalledWith(null);
	});
});