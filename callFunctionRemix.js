async function getMood() {
  const getMoodPromise = MoodContract.getMood();
  const Mood = await getMoodPromise;
  console.log(Mood);
  let aMood = (document.getElementById("addMood").innerHTML += Mood + " ");
}
async function setMood() {
  let mood = document.getElementById("mood").value;
  let setMoodPromise = MoodContract.setMood(mood);
  await setMoodPromise;
}
