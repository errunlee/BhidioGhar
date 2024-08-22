

class ApiResponse {
    consturctor(status, data, message = "Success") {
        this.status = status;
        this.message = success;
        this.data = data;
        this.success = status < 400
    }
}