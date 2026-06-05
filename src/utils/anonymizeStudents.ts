/**
 * Anonymize student data for privacy compliance
 */
export const anonymizeStudentId = (studentId: string): string => {
  if (!studentId) return '';

  // Keep first and last character visible, replace middle with asterisks
  if (studentId.length <= 2) {
    return '*'.repeat(studentId.length);
  }

  const firstChar = studentId[0];
  const lastChar = studentId[studentId.length - 1];
  const middleLength = studentId.length - 2;
  const maskedMiddle = '*'.repeat(middleLength);

  return `${firstChar}${maskedMiddle}${lastChar}`;
};

/**
 * Anonymize student name for privacy compliance
 */
export const anonymizeStudentName = (fullName: string): string => {
  if (!fullName) return '';

  const nameParts = fullName.trim().split(/\s+/);

  if (nameParts.length === 0) {
    return '*'.repeat(fullName.length);
  }

  if (nameParts.length === 1) {
    // Single name - show first letter and asterisks
    const firstChar = nameParts[0][0];
    const maskedLength = nameParts[0].length - 1;
    const maskedPart = '*'.repeat(maskedLength);
    return `${firstChar}${maskedPart}`;
  }

  // Multiple names - anonymize each part except possibly the last
  return nameParts.map((part, index) => {
    if (part.length <= 2) {
      return '*'.repeat(part.length);
    }

    // For last name, show first letter only if there are multiple parts
    if (index === nameParts.length - 1 && nameParts.length > 1) {
      return part[0] + '*'.repeat(part.length - 1);
    }

    // For other parts, show first and last letter
    const firstChar = part[0];
    const lastChar = part[part.length - 1];
    const middleLength = part.length - 2;
    const maskedMiddle = '*'.repeat(middleLength);

    return `${firstChar}${maskedMiddle}${lastChar}`;
  }).join(' ');
};

/**
 * Anonymize student data object
 */
export const anonymizeStudentData = (studentData: Record<string, any>): Record<string, any> => {
  const anonymized = { ...studentData };

  if (anonymized.studentId) {
    anonymized.studentId = anonymizeStudentId(anonymized.studentId);
  }

  if (anonymized.studentName) {
    anonymized.studentName = anonymizeStudentName(anonymized.studentName);
  }

  // Also handle arrays of student data
  if (Array.isArray(anonymized.students)) {
    anonymized.students = anonymized.students.map(student => anonymizeStudentData(student));
  }

  return anonymized;
};

export default {
  anonymizeStudentId,
  anonymizeStudentName,
  anonymizeStudentData
};