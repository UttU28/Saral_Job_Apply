from flask import Flask, request, jsonify
from flask_cors import CORS
import pyautogui
import socket
import os

app = Flask(__name__)

CORS(app)

@app.route('/typeThis', methods=['POST'])
def type_this():
    data = request.get_json()
    value = data.get('value')
    if not value:
        return jsonify({'error': 'No value provided'}), 400

    try:
        print(f"Received value: {value}")
        pyautogui.write(value, interval=0.01)
    except Exception as e:
        print(f"Unexpected error: {e}")
        return jsonify({'error': str(e)}), 500

    return jsonify({'message': 'Typing completed successfully'}), 200


def get_ipv4_address():
    try:
        hostname = socket.gethostname()
        ip_address = socket.gethostbyname(hostname)
        return ip_address
    except Exception as e:
        print(f"Error getting IP address: {e}")
        return "127.0.0.1"  # Fallback to localhost


def update_env_file(ipv4):
    env_file = '.env'
    env_var = f"REACT_APP_BASE_URL=http://{ipv4}:3000"

    if not os.path.exists(env_file):
        print(f"Creating {env_file}...")
        with open(env_file, 'w') as file:
            file.write(f"{env_var}\n")
    else:
        with open(env_file, 'r') as file:
            lines = file.readlines()

        with open(env_file, 'w') as file:
            updated = False
            for line in lines:
                if line.startswith("REACT_APP_BASE_URL="):
                    file.write(f"{env_var}\n")
                    updated = True
                else:
                    file.write(line)
            if not updated:
                file.write(f"{env_var}\n")

    print(f"Updated {env_file} with: {env_var}")


if __name__ == '__main__':
    ipv4 = get_ipv4_address()
    update_env_file(ipv4)
    print(f"Server is running on: http://{ipv4}:3000")
    app.run(host='0.0.0.0', port=3000)
