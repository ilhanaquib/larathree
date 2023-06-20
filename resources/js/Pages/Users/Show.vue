<template>
    <div>
      <div>
        <Link href="/users" class="text-blue-500">Back</Link>
      </div>
      <h1 class="mt-5">User Details</h1>
      <div>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <!-- Add other user details as needed -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  