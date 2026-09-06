interface UserData {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}

async function run() {
  const user = await fetchUser(1);
  console.log(user);
}

run();
