export default function DashboardScreen({ user }) {
  return (
    <div>
      <h2>Welcome, {user.name} 👋</h2>
      <p>Register No: {user.regNo}</p>
      <p>Email: {user.email}</p>

      <h3 style={{ marginTop: "20px" }}>📌 Instructions</h3>
      <ul>
        <li>Go to Menu</li>
        <li>Select Food + Slot</li>
        <li>Confirm Booking</li>
        <li>Avoid Queue!</li>
      </ul>
    </div>
  );
}
