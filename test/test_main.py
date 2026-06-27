from fastapi.testclient import TestClient

from backend.main import app

client = TestClient(app)


def test_hello_world():
    response = client.get("/api/hello_world")

    assert response.status_code == 200
    assert response.json() == {"message": "Hello from FastAPI!"}
