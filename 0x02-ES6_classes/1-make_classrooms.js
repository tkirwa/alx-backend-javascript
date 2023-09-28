// 1-make_classrooms.js

import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  // Create an array of ClassRoom objects with specified sizes
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  return rooms;
}
