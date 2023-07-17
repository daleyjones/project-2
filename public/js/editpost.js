const postId = document.querySelector('input[name="post-id"]').value;
const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/editPRoutes/${postId}`, {
  await fetch(`/api/projectsRoutes/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/profile');
};

const deleteClickHandler = async function () {
  await fetch(`/api/editPRoutes/${postId}`, {
    method: 'DELETE',
  });

  document.location.replace('/profile');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
