// to-do 생성
function createItem(title) {
    // 데이터 전송
    fetch('/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title }), // JSON 데이터로 변환하여 전송
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('To-Do 생성 실패');
            }
        })
        .then((data) => {
            // 성공 시 페이지 새로고침
            location.reload()
        })
        .catch((error) => {
            alert(error.message);
        });
}

// to-do 삭제
function deleteItem(id) {
    fetch(`/todo/${id}`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('To-Do 삭제 실패');
        }
        // 페이지 새로고침
        location.reload()
    })
    .catch(error => {
        alert(error.message);
    });
}