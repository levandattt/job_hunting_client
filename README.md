# Install package
```bash
    npm install
```
# Config .env
- API URL
    -   `REACT_APP_API_BASE=http://localhost:6970`

- Lấy danh sách conversation history ở sidebar:
    - env: `REACT_APP_API_GET_CONVERSATION_HISTORY=/api/v1/test/conversation/history`
    - API: `{REACT_APP_API_BASE} / {REACT_APP_API_GET_CONVERSATION_HISTORY}`
    - Response:
    ```code
    {
        histories: [
        {
            id: <String>,
            title:  <String>,
            createdAt: <DATETIME>,
        }
        ],
    }
    ```

- Lấy danh sách tin nhắn trong conversation
    - env: `REACT_APP_API_GET_CONVERSATION=/api/v1/test/chat`
    - API: `{REACT_APP_API_BASE} / {REACT_APP_API_GET_CONVERSATION} / :conversationID`
    - Response:
    ```code
    {
        messages: [
            {
                id: <String>,
                from: ENUM('user', 'assistant'),
                content:<String>,
            },
        ]
    }
    ```

- Yêu cầu một tạo conversation mới
    - env: `REACT_APP_API_NEW_CONVERSATION=/api/v1/test/chat`
    - API:`{REACT_APP_API_BASE} / {REACT_APP_API_NEW_CONVERSATION}`
    - Response:
    ```code
    {
        "id": <String> //id của conversation
    }
    ```
    
- Đặt câu hỏi mới 
    - env: `REACT_APP_API_NEW_REQUEST=/api/v1/test/chat/new`
    - API: `{REACT_APP_API_BASE} / {REACT_APP_API_NEW_CONVERSATION}`
    - Body:
    ```
    {
        message:<String>
    }
    ```
    - Response:(stream)
    ```
    {"type":"status","status":"started"}
    {"type":"status","status":"title","message":"<cái title hiện bên sidebar>"}
    {"type":"id","id":"<id của câu trả lời>"}

    {"type":"stream","token":"<câu trả lời được cắt nhỏ để stream>"}
    ...
    {"type":"stream","token":"<câu trả lời được cắt nhỏ để stream>"}
    
    {"type":"finalAnswer","text":"<This is the final answer.>"}
    ```
# Run
```bash
    npm start
```

#