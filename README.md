LeetCode Stats Viewer 🔍
A simple web application that allows users to enter a LeetCode username and fetch their problem-solving statistics using the LeetCode Stats API.
🚀 Features
- Enter any valid LeetCode username
- Instantly fetch and display:
  - ✅ Easy problems solved
  - ⚙️ Medium problems solved
  - 🔥 Hard problems solved
- Simple, responsive UI
- Error handling for invalid or empty usernames
📡 API Used
This project uses the public LeetCode Stats API:
GET https://leetcode-stats-api.herokuapp.com/{username}
Example Response:
{
  "status": "success",
  "totalSolved": 360,
  "easySolved": 146,
  "mediumSolved": 196,
  "hardSolved": 21
}
📦 Installation
1. Clone the repository:
   git clone https://github.com/umer987/leetcode-stats.git
   cd leetcode-stats-viewer
2. Open index.html in your browser.
> No frameworks or build tools needed — it's all HTML, CSS, and JavaScript!
🧠 How It Works
1. User enters their LeetCode username
2. The app sends a request to:
   https://leetcode-stats-api.herokuapp.com/${username}
3. It displays the easySolved, mediumSolved, and hardSolved values on the screen.
🛠️ Technologies Used
- HTML
- CSS
- JavaScript (ES6)
- LeetCode Stats API
🙋‍♂️ Author
Your Name
GitHub: https://github.com/umer987
LinkedIn: #
📄 License
This project is licensed under the MIT License.
