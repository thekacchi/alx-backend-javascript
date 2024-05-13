// 1-get_list_student_ids.js
function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((item) => item.id);
}

export default getListStudentIds;
