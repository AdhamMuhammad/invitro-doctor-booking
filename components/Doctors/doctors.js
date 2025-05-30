const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    workingDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "12:30 PM",
      end: "11:30 PM"
      },
    timeSlots: ["12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM", "4:30 PM", "05:30 PM", "06:30 PM", "07:30 PM", "8:30 PM", "9:30 PM", "10:30 PM", "11:00 PM", "11:30 PM"]
  },
  {
    id: 2,
    name: "Dr. Ahmed Khaled",
    specialty: "Dermatology",
    rating: 4.5,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    workingDays: ["Tuesday", "Friday"],
    workingHours: {
      start: "7:00 AM",
      end: "3:00 PM"
      },
    timeSlots: ["07:30 AM", "09:30 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"]
  },
  {
    id: 3,
    name: "Dr. Mona Elsayed",
    specialty: "Pediatrics",
    rating: 4.9,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "8:00 AM",
      end: "2:00 PM"
      },
    timeSlots: ["08:30 AM", "10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM"]
  },
  {
    id: 4,
    name: "Dr. Youssef Hassan",
    specialty: "Neurology",
    rating: 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    workingDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    workingHours: {
      start: "12:00 PM",
      end: "6:00 PM"
      },
    timeSlots: ["12:30 PM", "02:00 PM", "03:30 PM", "05:00 PM"]
  },
  {
    id: 5,
    name: "Dr. Rana Tarek",
    specialty: "Orthopedics",
    rating: 4.4,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    workingDays: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "10:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["10:30 AM", "12:30 PM", "02:00 PM", "03:30 PM"]
  },
  {
    id: 6,
    name: "Dr. Amr Nabil",
    specialty: "Psychiatry",
    rating: 4.6,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "2:00 PM",
      end: "8:00 PM"
      },
    timeSlots: ["02:30 PM", "04:00 PM", "05:30 PM", "07:00 PM"]
  },
  {
    id: 7,
    name: "Dr. Salma Fathy",
    specialty: "Ophthalmology",
    rating: 4.3,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "7:00 AM",
      end: "1:00 PM"
      },
    timeSlots: ["07:30 AM", "09:00 AM", "10:30 AM", "12:00 PM"]
  },
  {
    id: 8,
    name: "Dr. Karim Mostafa",
    specialty: "E.N.T",
    rating: 4.2,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "10:00 AM",
      end: "6:00 PM"
      },
    timeSlots: ["10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM"]
  },
  {
    id: 9,
    name: "Dr. Layla Samir",
    specialty: "Dermatology",
    rating: 4.7,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "9:30 AM",
      end: "5:30 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"]
  },
  {
    id: 10,
    name: "Dr. Ahmed Farouk",
    specialty: "Cardiology",
    rating: 4.9,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    workingDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    workingHours: {
      start: "7:00 AM",
      end: "3:00 PM"
      },
    timeSlots: ["07:30 AM", "09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM"]
  },
  {
    id: 11,
    name: "Dr. Ali Saeed",
    specialty: "Orthopedics",
    rating: 4.6,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "8:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["08:30 AM", "10:00 AM", "12:00 PM", "02:00 PM", "3:30 PM"]
  },
  {
    id: 12,
    name: "Dr. Fatima Saleh",
    specialty: "Ophthalmology",
    rating: 4.4,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    workingDays: ["Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
    workingHours: {
      start: "2:00 PM",
      end: "8:00 PM"
      },
    timeSlots: ["02:30 PM", "04:00 PM", "05:30 PM", "07:00 PM"]
  },
  {
    id: 13,
    name: "Dr. Hana Abdelrahman",
    specialty: "Pediatrics",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    workingDays: ["Sunday", "Monday", "Tuesday", "Thursday", "Friday"],
    workingHours: {
      start: "6:30 AM",
      end: "2:30 PM"
      },
    timeSlots: ["07:00 AM", "09:00 AM", "10:30 AM", "12:30 PM", "02:00 PM"]
  },
  {
    id: 14,
    name: "Dr. Kareem Maher",
    specialty: "Psychiatry",
    rating: 4.8,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
    workingHours: {
      start: "10:00 PM",
      end: "6:00 AM"
      },
    timeSlots: ["10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"]
  },
  {
    id: 15,
    name: "Dr. Noura Fathy",
    specialty: "Dermatology",
    rating: 4.3,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "8:30 AM",
      end: "4:30 PM"
      },
    timeSlots: ["08:30 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM"]
  },
  {
    id: 16,
    name: "Dr. Mohamed Elhadi",
    specialty: "Neurology",
    rating: 4.5,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "7:00 AM",
      end: "3:00 PM"
      },
    timeSlots: ["07:30 AM", "09:00 AM", "10:30 AM", "12:00 PM"]
  },
  {
    id: 17,
    name: "Dr. Laila Mustafa",
    specialty: "Cardiology",
    rating: 4.6,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:30 AM", "11:00 AM", "01:30 PM", "03:30 PM"]
  },
  {
    id: 18,
    name: "Dr. Hossam Zaki",
    specialty: "Pediatrics",
    rating: 4.7,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    workingDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    workingHours: {
      start: "2:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["02:30 AM", "03:45 AM", "09:30 AM", "11:30 AM", "02:00 PM", "03:30 PM"]
  },
  {
    id: 19,
    name: "Dr. Rania Ezzat",
    specialty: "Orthopedics",
    rating: 4.9,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    workingDays: ["Monday", "Wednesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "10:00 AM",
      end: "6:00 PM"
      },
    timeSlots: ["10:00 AM", "12:30 PM", "02:30 PM", "04:30 PM"]
  },
  {
    id: 20,
    name: "Dr. Hala Hossam",
    specialty: "Psychiatry",
    rating: 4.4,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "12:00 PM",
      end: "8:00 AM"
      },
    timeSlots: ["12:30 AM", "02:00 AM", "03:30 AM", "05:00 AM"]
  },
  {
      id: 21,
      name: "Dr. Ali Ghanem",
      specialty: "Dermatology",
      rating: 4.6,
      location: "Alexandria",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      workingDays: ["Sunday", "Monday", "Tuesday", "Thursday", "Saturday"],
      workingHours: {
        start: "8:00 PM",
        end: "2:00 AM"
        },
      timeSlots: ["08:00 PM", "09:30 PM", "11:00 PM", "12:30 AM", "02:00 AM"]
  },
  {
      id: 22,
      name: "Dr. Samira Mostafa",
      specialty: "Pediatrics",
      rating: 4.7,
      location: "Giza",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      workingDays: ["Monday", "Wednesday", "Friday"],
      workingHours: {
        start: "9:00 AM",
        end: "3:00 PM"
        },
      timeSlots: ["08:30 AM", "10:00 AM", "01:00 PM"]
  },
  {
      id: 23,
      name: "Dr. Ibrahim Omar",
      specialty: "Neurology",
      rating: 4.5,
      location: "Cairo",
      image: "https://randomuser.me/api/portraits/men/39.jpg",
      workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      workingHours: {
        start: "8:00 PM",
        end: "2:00 AM"
        },
      timeSlots: ["08:00 PM", "09:30 PM", "11:00 PM", "12:30 AM", "02:00 AM"]
  },
  {
      id: 24,
      name: "Dr. Layla Ibrahim",
      specialty: "Psychiatry",
      rating: 4.8,
      location: "Tanta",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      workingDays: ["Sunday", "Tuesday", "Friday"],
      workingHours: {
        start: "9:00 AM",
        end: "5:00 PM"
        },
      timeSlots: ["10:00 AM", "12:30 PM", "03:30 PM"]
  },
  {
      id: 25,
      name: "Dr. Mohamed Fawzy",
      specialty: "Orthopedics",
      rating: 4.4,
      location: "Mansoura",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      workingDays: ["Monday", "Thursday", "Saturday"],
      workingHours: {
        start: "8:00 AM",
        end: "2:00 PM"
        },
      timeSlots: ["09:30 AM", "12:00 PM", "03:00 PM"]
  },
  {
      id: 26,
      name: "Dr. Nabil Ashraf",
      specialty: "Ophthalmology",
      rating: 4.6,
      location: "Cairo",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      workingDays: ["Monday", "Wednesday", "Friday"],
      workingHours: {
        start: "10:00 PM",
        end: "4:00 AM"
        },
      timeSlots: ["09:30 AM", "11:00 AM", "01:30 PM"]
  },
  {
      id: 27,
      name: "Dr. Dina Ramadan",
      specialty: "E.N.T",
      rating: 4.7,
      location: "Suez",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      workingDays: ["Sunday", "Tuesday", "Thursday"],
      workingHours: {
        start: "9:00 AM",
        end: "5:00 PM"
        },
      timeSlots: ["10:00 AM", "12:00 PM", "03:00 PM"]
  },
  {
      id: 28,
      name: "Dr. Omar Ahmed",
      specialty: "Cardiology",
      rating: 4.5,
      location: "Giza",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
      workingDays: ["Monday", "Tuesday", "Thursday"],
      workingHours: {
        start: "9:00 AM",
        end: "3:00 PM"
        },
      timeSlots: ["09:00 AM", "11:00 AM", "01:30 PM"]
  },
  {
      id: 29,
      name: "Dr. Rasha Elmasry",
      specialty: "Pediatrics",
      rating: 4.7,
      location: "Alexandria",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      workingDays: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
      workingHours: {
        start: "8:00 PM",
        end: "2:00 AM"
        },
      timeSlots: ["08:00 PM", "09:30 PM", "11:00 PM", "12:30 AM", "02:00 AM"]
  },
  {
      id: 30,
      name: "Dr. Ahmed Zayed",
      specialty: "Dermatology",
      rating: 4.9,
      location: "Tanta",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      workingDays: ["Sunday", "Tuesday", "Friday"],
      workingHours: {
        start: "10:00 AM",
        end: "9:00 PM"
        },
      timeSlots: ["09:30 AM", "12:00 PM", "02:30 PM", "07:00 PM"]
  },
  {
      id: 31,
      name: "Dr. Hana Samy",
      specialty: "Psychiatry",
      rating: 4.4,
      location: "Suez",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      workingDays: ["Monday", "Thursday", "Saturday"],
      workingHours: {
        start: "9:00 AM",
        end: "5:00 PM"
        },
      timeSlots: ["09:00 AM", "11:30 AM", "02:00 PM"]
  },
  {
      id: 32,
      name: "Dr. Mustafa Khaled",
      specialty: "Orthopedics",
      rating: 4.6,
      location: "Cairo",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      workingDays: ["Tuesday", "Thursday", "Saturday"],
      workingHours: {
        start: "10:00 AM",
        end: "9:00 PM"
        },
      timeSlots: ["09:30 AM", "12:00 PM", "02:30 PM", "08:00 PM"]
  },
  {
      id: 33,
      name: "Dr. Laila Ghanem",
      specialty: "Ophthalmology",
      rating: 4.8,
      location: "Mansoura",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      workingDays: ["Monday", "Wednesday", "Friday"],
      workingHours: {
        start: "9:00 AM",
        end: "4:00 PM"
        },
      timeSlots: ["10:00 AM", "12:00 PM", "02:00 PM"]
  },
  {
      id: 34,
      name: "Dr. Khaled Osama",
      specialty: "E.N.T",
      rating: 4.5,
      location: "Giza",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      workingDays: ["Monday", "Tuesday", "Thursday"],
      workingHours: {
        start: "10:00 AM",
        end: "9:00 PM"
        },
      timeSlots: ["09:00 AM", "11:30 AM", "01:30 PM", "07:30 PM"]
  },
  {
      id: 35,
      name: "Dr. Salma Fathy",
      specialty: "Pediatrics",
      rating: 4.7,
      location: "Alexandria",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      workingDays: ["Sunday", "Tuesday", "Thursday"],
      workingHours: {
        start: "8:30 AM",
        end: "3:00 PM"
        },
      timeSlots: ["08:30 AM", "10:30 AM", "01:00 PM"]
  },
  {
      id: 36,
      name: "Dr. Youssef Farid",
      specialty: "Dermatology",
      rating: 4.6,
      location: "Cairo",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      workingDays: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
      workingHours: {
        start: "8:00 PM",
        end: "2:00 AM"
        },
      timeSlots: ["08:00 PM", "09:30 PM", "11:00 PM", "12:30 AM", "02:00 AM"]
  },
  {
      id: 37,
      name: "Dr. Ranya Shafik",
      specialty: "Cardiology",
      rating: 4.4,
      location: "Tanta",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      workingDays: ["Monday", "Thursday", "Saturday"],
      workingHours: {
        start: "9:00 AM",
        end: "9:00 PM"
        },
      timeSlots: ["10:00 AM", "12:00 PM", "02:00 PM", "06:30 PM"]
  },
  {
      id: 38,
      name: "Dr. Hassan Tamer",
      specialty: "Pediatrics",
      rating: 4.8,
      location: "Giza",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      workingDays: ["Monday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      workingHours: {
        start: "8:00 PM",
        end: "2:00 AM"
        },
      timeSlots: ["08:00 PM", "09:30 PM", "11:00 PM", "12:30 AM", "02:00 AM"]
  },
  {
      id: 39,
      name: "Dr. Sahar Mohamed",
      specialty: "Neurology",
      rating: 4.5,
      location: "Alexandria",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      workingDays: ["Monday", "Wednesday", "Saturday"],
      workingHours: {
        start: "9:30 AM",
        end: "4:30 PM"
        },
      timeSlots: ["09:00 AM", "11:30 AM", "02:00 PM"]
  },
  {
      id: 40,
      name: "Dr. Mona Alaa",
      specialty: "Psychiatry",
      rating: 4.6,
      location: "Cairo",
      image: "https://randomuser.me/api/portraits/women/38.jpg",
      workingDays: ["Sunday", "Tuesday", "Thursday"],
      workingHours: {
        start: "9:00 AM",
        end: "9:00 PM"
        },
      timeSlots: ["09:00 AM", "11:30 AM", "02:00 PM", "08:00 PM"]
  },
  {
    id: 41,
    name: "Dr. Rania Adel",
    specialty: "Orthopedics",
    rating: 4.7,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    workingDays: ["Sunday", "Monday", "Thursday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "1:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM"]
  },
  {
    id: 42,
    name: "Dr. Yasser Hamdy",
    specialty: "Ophthalmology",
    rating: 4.5,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:00 PM", "12:00 AM"]
  },
  {
    id: 43,
    name: "Dr. Yasmin Khaled",
    specialty: "Pediatrics",
    rating: 4.6,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Friday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:30 PM", "12:30 AM"]
  },
  {
    id: 44,
    name: "Dr. Omar Ghanem",
    specialty: "Neurology",
    rating: 4.7,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "9:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["09:00 PM", "11:00 PM", "01:00 AM"]
  },
  {
    id: 45,
    name: "Dr. Fadwa Alaa",
    specialty: "Psychiatry",
    rating: 4.4,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "10:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["10:00 PM", "01:00 AM", "02:00 AM", "03:59 AM"]
  },
  {
    id: 46,
    name: "Dr. Ali Hossam",
    specialty: "Dermatology",
    rating: 4.6,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    workingDays: ["Sunday", "Monday", "Thursday", "Saturday"],
    workingHours: {
      start: "9:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["09:00 PM", "11:30 PM", "01:30 AM"]
  },
  {
    id: 47,
    name: "Dr. Khaled Zaki",
    specialty: "Ophthalmology",
    rating: 4.8,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    workingDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "1:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM"]
  },
  {
    id: 48,
    name: "Dr. Samar Elgohary",
    specialty: "E.N.T",
    rating: 4.5,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Sunday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:30 PM", "12:30 AM"]
  },
  {
    id: 49,
    name: "Dr. Youssef Ali",
    specialty: "Cardiology",
    rating: 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:00 PM", "12:00 AM"]
  },
  {
    id: 50,
    name: "Dr. Rasha Ahmed",
    specialty: "Pediatrics",
    rating: 4.6,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    workingDays: ["Sunday", "Monday", "Tuesday", "Thursday"],
    workingHours: {
      start: "10:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["10:00 PM", "12:00 AM", "02:00 AM"]
  },
  {
    id: 51,
    name: "Dr. Amr Gerges",
    specialty: "Neurology",
    rating: 4.5,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "11:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 52,
    name: "Dr. Dina Elbasyuni",
    specialty: "Psychiatry",
    rating: 4.6,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:00 PM", "12:00 AM"]
  },
  {
    id: 53,
    name: "Dr. Karim Fahmy",
    specialty: "Orthopedics",
    rating: 4.8,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Sunday"],
    workingHours: {
      start: "9:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["09:00 PM", "11:30 PM", "01:30 AM"]
  },
  {
    id: 54,
    name: "Dr. Faten Maher",
    specialty: "Ophthalmology",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "10:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["10:00 PM", "12:00 AM", "02:00 AM"]
  },
  {
    id: 55,
    name: "Dr. Mohamed Kassem",
    specialty: "E.N.T",
    rating: 4.6,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "9:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["09:00 PM", "11:30 PM", "01:30 AM"]
  },
  {
    id: 56,
    name: "Dr. Rania Nasser",
    specialty: "Cardiology",
    rating: 4.8,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "1:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM"]
  },
  {
    id: 57,
    name: "Dr. Ahmed Gharib",
    specialty: "Pediatrics",
    rating: 4.5,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Sunday"],
    workingHours: {
      start: "7:00 PM",
      end: "1:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM"]
  },
  {
    id: 58,
    name: "Dr. Omar Alwan",
    specialty: "Dermatology",
    rating: 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "9:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["09:00 PM", "11:30 PM", "01:30 AM"]
  },
  {
    id: 59,
    name: "Dr. Yasmine Farouk",
    specialty: "Pediatrics",
    rating: 4.6,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    workingDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:30 PM", "12:30 AM"]
  },
  {
    id: 60,
    name: "Dr. Hassan Kamal",
    specialty: "Neurology",
    rating: 4.8,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday"],
    workingHours: {
      start: "7:00 PM",
      end: "1:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM"]
  },
  {
    id: 61,
    name: "Dr. Amina Salah",
    specialty: "Orthopedics",
    rating: 4.7,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Sunday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["08:00 PM", "10:00 PM", "12:00 AM", "02:00 AM"]
  },
  {
    id: 62,
    name: "Dr. Walid Ehab",
    specialty: "Psychiatry",
    rating: 4.5,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    workingDays: ["Sunday", "Thursday", "Saturday", "Monday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 63,
    name: "Dr. Samia Fawzy",
    specialty: "Pediatrics",
    rating: 4.8,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "10:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["08:30 AM", "11:00 AM", "01:30 PM", "03:30 PM"]
  },
  {
    id: 64,
    name: "Dr. Ali Kamal",
    specialty: "Neurology",
    rating: 4.6,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 65,
    name: "Dr. Mahmoud Salah",
    specialty: "Dermatology",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "8:00 AM",
      end: "2:00 PM"
      },
    timeSlots: ["09:00 AM", "11:30 AM", "01:00 PM"]
  },
  {
    id: 66,
    name: "Dr. Mariam Khalil",
    specialty: "Ophthalmology",
    rating: 4.6,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
    workingDays: ["Monday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "2:00 PM",
      end: "8:00 PM"
      },
    timeSlots: ["02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"]
  },
  {
    id: 67,
    name: "Dr. Hany Hassan",
    specialty: "E.N.T",
    rating: 4.8,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["07:30 PM", "10:00 PM", "12:30 AM", "03:00 AM"]
  },
  {
    id: 68,
    name: "Dr. Rasha Nasr",
    specialty: "Cardiology",
    rating: 4.5,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "6:00 AM",
      end: "12:00 PM"
      },
    timeSlots: ["06:30 AM", "08:30 AM", "10:30 AM"]
  },
  {
    id: 69,
    name: "Dr. Fady Ibrahim",
    specialty: "Dermatology",
    rating: 4.6,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    workingDays: ["Sunday", "Monday", "Friday"],
    workingHours: {
      start: "10:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["10:00 AM", "12:00 PM", "02:00 PM"]
  },
  {
    id: 70,
    name: "Dr. Mona Hossam",
    specialty: "Psychiatry",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    workingDays: ["Monday", "Wednesday", "Saturday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:00 PM", "12:00 AM"]
  },
  {
    id: 71,
    name: "Dr. Yousri Ghanem",
    specialty: "Neurology",
    rating: 4.6,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    workingDays: ["Monday", "Thursday", "Saturday"],
    workingHours: {
      start: "6:00 AM",
      end: "12:00 PM"
      },
    timeSlots: ["06:30 AM", "08:30 AM", "10:00 AM"]
  },
  {
    id: 72,
    name: "Dr. Ayman Khaled",
    specialty: "Orthopedics",
    rating: 4.8,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "1:00 PM",
      end: "7:00 PM"
      },
    timeSlots: ["01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 73,
    name: "Dr. Sanaa Hassan",
    specialty: "E.N.T",
    rating: 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    workingDays: ["Monday", "Wednesday", "Friday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["07:00 PM", "09:30 PM", "12:00 AM"]
  },
  {
    id: 74,
    name: "Dr. Yasser Elhakeem",
    specialty: "Cardiology",
    rating: 4.6,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    workingDays: ["Sunday", "Wednesday", "Saturday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:00 PM", "12:00 AM"]
  },
  {
    id: 75,
    name: "Dr. Noha Ali",
    specialty: "Psychiatry",
    rating: 4.8,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    workingDays: ["Monday", "Thursday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["07:30 PM", "09:30 PM", "12:00 AM"]
  },
  {
    id: 76,
    name: "Dr. Kamal Zaki",
    specialty: "Pediatrics",
    rating: 4.7,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:30 AM", "02:00 PM"]
  },
  {
    id: 77,
    name: "Dr. Hala Gamil",
    specialty: "Neurology",
    rating: 4.6,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    workingDays: ["Monday", "Wednesday", "Friday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["07:30 PM", "10:00 PM", "12:30 AM"]
  },
  {
    id: 78,
    name: "Dr. Farida Ghoneim",
    specialty: "Dermatology",
    rating: 4.8,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "8:00 PM",
      end: "2:00 AM"
      },
    timeSlots: ["08:00 PM", "10:00 PM", "12:00 AM"]
  },
  {
    id: 79,
    name: "Dr. Ehab Saeed",
    specialty: "Ophthalmology",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    workingDays: ["Monday", "Wednesday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "02:00 PM"]
  },
  {
    id: 80,
    name: "Dr. Mai Kassem",
    specialty: "Orthopedics",
    rating: 4.6,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    workingDays: ["Monday", "Wednesday", "Friday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["09:00 PM", "11:30 PM", "02:00 AM"]
  },
  {
    id: 81,
    name: "Dr. Tamer Abdelaziz",
    specialty: "Neurology",
    rating: 4.6,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Friday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 82,
    name: "Dr. Amira Hassan",
    specialty: "Pediatrics",
    rating: 4.8,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "8:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 83,
    name: "Dr. Nour El-Din",
    specialty: "Cardiology",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "2:00 PM",
      end: "10:00 PM"
      },
    timeSlots: ["02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"]
  },
  {
    id: 84,
    name: "Dr. Yara Kassem",
    specialty: "Dermatology",
    rating: 4.9,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 85,
    name: "Dr. Fady Ghonim",
    specialty: "E.N.T",
    rating: 4.5,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    workingDays: ["Sunday", "Monday", "Wednesday", "Thursday"],
    workingHours: {
      start: "9:00 AM",
      end: "9:00 PM"
      },
    timeSlots: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"]
  },
  {
    id: 86,
    name: "Dr. Noura Ahmed",
    specialty: "Psychiatry",
    rating: 4.7,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "1:00 PM",
      end: "9:00 PM"
      },
    timeSlots: ["01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"]
  },
  {
    id: 87,
    name: "Dr. Omar Tamer",
    specialty: "Orthopedics",
    rating: 4.8,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "6:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 88,
    name: "Dr. Rabab Mohsen",
    specialty: "Pediatrics",
    rating: 4.9,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 89,
    name: "Dr. Samy Magdy",
    specialty: "Cardiology",
    rating: 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "9:00 PM"
      },
    timeSlots: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"]
  },
  {
    id: 90,
    name: "Dr. Shaimaa Zaky",
    specialty: "Dermatology",
    rating: 4.6,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    workingDays: ["Monday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "8:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 91,
    name: "Dr. Ahmed Ghanem",
    specialty: "Psychiatry",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Saturday"],
    workingHours: {
      start: "2:00 PM",
      end: "10:00 PM"
      },
    timeSlots: ["02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"]
  },
  {
    id: 92,
    name: "Dr. Khaled Fouad",
    specialty: "Neurology",
    rating: 4.8,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    workingDays: ["Monday", "Wednesday", "Saturday", "Sunday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"]
  },
  {
    id: 93,
    name: "Dr. Marwa Kassem",
    specialty: "Orthopedics",
    rating: 4.6,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "6:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 94,
    name: "Dr. Rania Mostafa",
    specialty: "E.N.T",
    rating: 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    workingDays: ["Monday", "Wednesday", "Saturday", "Sunday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 95,
    name: "Dr. Yousra Elshamy",
    specialty: "Cardiology",
    rating: 4.5,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "3:00 PM",
      end: "11:00 PM"
      },
    timeSlots: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM", "11:00 PM"]
  },
  {
    id: 96,
    name: "Dr. Ali Farouk",
    specialty: "Dermatology",
    rating: 4.8,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    workingDays: ["Monday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "10:00 AM",
      end: "6:00 PM"
      },
    timeSlots: ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"]
  },
  {
    id: 97,
    name: "Dr. Farida El-Badry",
    specialty: "Ophthalmology",
    rating: 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 98,
    name: "Dr. Mohamed Ali",
    specialty: "E.N.T",
    rating: 4.5,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    workingDays: ["Sunday", "Monday", "Wednesday", "Thursday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 99,
    name: "Dr. Maha Gharib",
    specialty: "Pediatrics",
    rating: 4.8,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    workingHours: {
      start: "8:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 100,
    name: "Dr. Ashraf Mosaad",
    specialty: "Neurology",
    rating: 4.7,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 101,
    name: "Dr. Hossam Mahmoud",
    specialty: "Orthopedics",
    rating  : 4.8,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    workingHours: {
      start: "8:00 AM",
      end: "2:00 PM"
      },
    timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"]
  },
  {
    id: 102,
    name: "Dr. Amal El-Sayed",
    specialty: "Dermatology",
    rating  : 4.9,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
    workingDays: ["Sunday", "Monday", "Wednesday", "Friday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 103,
    name: "Dr. Ali Mohamed",
    specialty: "Cardiology",
    rating  : 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    workingDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "3:00 PM",
      end: "9:00 PM"
      },
    timeSlots: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"]
  },
  {
    id: 104,
    name: "Dr. Asma Ibrahim",
    specialty: "Pediatrics",
    rating  : 4.8,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    workingDays: ["Monday", "Wednesday", "Thursday", "Friday", "Sunday"],
    workingHours: {
      start: "8:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 105,
    name: "Dr. Mohamed El-Desouki",
    specialty: "Ophthalmology",
    rating  : 4.6,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "12:00 PM",
      end: "6:00 PM"
      },
    timeSlots: ["12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"]
  },
  {
    id: 106,
    name: "Dr. Fatima Mostafa",
    specialty: "Psychiatry",
    rating  : 4.7,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    workingDays: ["Monday", "Wednesday", "Saturday", "Sunday", "Tuesday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 107,
    name: "Dr. Youssef Abdel Fattah",
    specialty: "Orthopedics",
    rating  : 4.6,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "2:00 PM",
      end: "8:00 PM"
      },
    timeSlots: ["02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"]
  },
  {
    id: 108,
    name: "Dr. Reem Al-Hassan",
    specialty: "Dermatology",
    rating  : 4.8,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 109,
    name: "Dr. Khaled El-Sayed",
    specialty: "E.N.T",
    rating  : 4.7,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM", "04:00 AM"]
  },
  {
    id: 110,
    name: "Dr. Samira Fathy",
    specialty: "Cardiology",
    rating  : 4.6,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
    workingHours: {
      start: "10:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 111,
    name: "Dr. Tarek El-Tantawy",
    specialty: "Psychiatry",
    rating  : 4.5,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    workingDays: ["Monday", "Tuesday", "Saturday", "Sunday", "Thursday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 112,
    name: "Dr. Mohamad Awad",
    specialty: "Pediatrics",
    rating  : 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
    workingHours: {
      start: "8:00 AM",
      end: "4:00 PM"
      },
    timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 113,
    name: "Dr. Dina Abdel-Rahman",
    specialty: "Orthopedics",
    rating  : 4.8,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 114,
    name: "Dr. Maged El-Said",
    specialty: "Cardiology",
    rating  : 4.6,
    location: "Suez",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
    workingHours: {
      start: "10:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: 115,
    name: "Dr. Karim Abdel Rahman",
    specialty: "Psychiatry",
    rating  : 4.7,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    workingDays: ["Tuesday", "Thursday", "Saturday", "Sunday", "Monday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 116,
    name: "Dr. Hanan Gharib",
    specialty: "Pediatrics",
    rating  : 4.9,
    location: "Mansoura",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 117,
    name: "Dr. Osama Fathi",
    specialty: "E.N.T",
    rating  : 4.6,
    location: "Alexandria",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    workingDays: ["Monday", "Thursday", "Saturday", "Sunday", "Tuesday"],
    workingHours: {
      start: "7:00 PM",
      end: "3:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM"]
  },
  {
    id: 118,
    name: "Dr. Mona Aboud",
    specialty: "Ophthalmology",
    rating  : 4.7,
    location: "Cairo",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Saturday", "Monday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM", "04:00 AM"]
  },
  {
    id: 119,
    name: "Dr. Samer Gamil",
    specialty: "Cardiology",
    rating  : 4.5,
    location: "Tanta",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    workingDays: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"],
    workingHours: {
      start: "9:00 AM",
      end: "5:00 PM"
      },
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: 120,
    name: "Dr. Nabil Ramadan",
    specialty: "Psychiatry",
    rating: 4.8,
    location: "Giza",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    workingDays: ["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"],
    workingHours: {
      start: "7:00 PM",
      end: "4:00 AM"
      },
    timeSlots: ["07:00 PM", "09:00 PM", "11:00 PM", "01:00 AM", "03:00 AM", "04:00 AM"]
  }
];

export default doctors;
