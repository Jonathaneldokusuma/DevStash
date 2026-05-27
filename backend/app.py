from flask import Flask, jsonify
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# CORS configuration: allow only specific origins in production
CORS(app, resources={r"/api/*": {"origins": "*"}})  # TODO: Restrict origins in production

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint to verify API status."""
    return jsonify({"status": "ok", "message": "DevStash API is running"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
