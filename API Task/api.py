import requests

def test_get_request():
    #  URL for the GET request
    url = "https://reqres.in/api/users/2"  
    #  GET request
    response = requests.get(url)

    #  status code
    print(f"Response Status Code: {response.status_code}")

    # Validate if the status code is 200
    if response.status_code == 200:
        print("Test Passed: Status code is 200.")
    else:
        print("Test Failed: Status code is not 200.")

if __name__ == "__main__":
    test_get_request()
