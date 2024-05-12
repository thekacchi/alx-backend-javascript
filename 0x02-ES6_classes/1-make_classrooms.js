// 1-make_classrooms.js
import ClassRoom from './0-classroom'; // Remove ".js" file extension

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = roomSizes.map((size) => new ClassRoom(size)); // Add parentheses around "size"
  return rooms;
}

export default initializeRooms;
