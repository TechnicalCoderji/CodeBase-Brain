function receiveRepo(githubUrl) {
  return { message: 'Repo received', url: githubUrl };
}

module.exports = { receiveRepo };
