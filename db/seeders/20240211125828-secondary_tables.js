"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("talent_resumes", [
      {
        talent_id: 1,
        location: "Singapore",
        industry: "Technology",
        title: "Software Engineer",
        objective: "Seeking a challenging role in software development.",
      },
      {
        talent_id: 2,
        location: "Malaysia",
        industry: "Finance",
        title: "Financial Analyst",
        objective:
          "Experienced financial analyst looking for new opportunities.",
      },
      {
        talent_id: 3,
        location: "Hong Kong",
        industry: "Marketing",
        title: "Marketing Specialist",
        objective:
          "Marketing professional with expertise in digital marketing strategies.",
      },
      {
        talent_id: 4,
        location: "Singapore",
        industry: "Education",
        title: "Specialist Coding Teacher",
        objective:
          "Teaching professional with expertise in teaching primary and pre-primary age groups.",
      },
    ]);

    await queryInterface.bulkInsert("talent_work_experiences", [
      // talent_id: 1
      {
        talent_id: 1,
        company_name: "ABC Inc.",
        position: "Software Developer",
        responsibility: "Developing web applications.",
        start_month: "January",
        start_year: "2020",
        end_month: "December",
        end_year: "2022",
      },
      {
        talent_id: 1,
        company_name: "Shopping Co.",
        position: "Senior Software Engineer",
        responsibility: "Leading development projects.",
        start_month: "January",
        start_year: "2023",
      },
      // talent_id: 2
      {
        talent_id: 2,
        company_name: "123 Investments",
        position: "Financial Analyst Intern",
        responsibility: "Analyzed financial data and prepared reports.",
        start_month: "June",
        start_year: "2021",
        end_month: "August",
        end_year: "2021",
      },
      // talent_id: 3
      {
        talent_id: 3,
        company_name: "Market Solutions Inc.",
        position: "Marketing Assistant",
        responsibility: "Assisted in developing marketing strategies.",
        start_month: "March",
        start_year: "2022",
        end_month: "June",
        end_year: "2022",
      },
      // talent_id: 4
      {
        talent_id: 4,
        company_name: "Little Coders Academy",
        position: "Junior Coding Instructor",
        responsibility:
          "Taught basic coding principles to primary school students.",
        start_month: "August",
        start_year: "2018",
        end_month: "May",
        end_year: "2020",
      },
      {
        talent_id: 4,
        company_name: "Future Innovators School",
        position: "Senior Coding Instructor",
        responsibility:
          "Developed curriculum and taught advanced coding to pre-primary and primary students.",
        start_month: "June",
        start_year: "2020",
        end_month: "July",
        end_year: "2023",
      },
      {
        talent_id: 4,
        company_name: "TechKids Learning Center",
        position: "Coding Workshop Facilitator",
        responsibility:
          "Conducted weekend coding workshops and after-school programs.",
        start_month: "August",
        start_year: "2023",
      },
    ]);

    await queryInterface.bulkInsert("talent_skill_sets", [
      // talent_id: 1
      {
        talent_id: 1,
        skill: "JavaScript",
        proficiency_level: "Intermediate",
      },
      {
        talent_id: 1,
        skill: "React",
        proficiency_level: "Advanced",
      },
      // talent_id: 2
      {
        talent_id: 2,
        skill: "Financial Modeling",
        proficiency_level: "Great",
      },
      // talent_id: 3
      {
        talent_id: 3,
        skill: "Digital Marketing",
        proficiency_level: "Expert",
      },
      // talent_id: 4
      {
        talent_id: 4,
        skill: "Scratch Programming",
        proficiency_level: "Expert",
      },
      {
        talent_id: 4,
        skill: "Python",
        proficiency_level: "Advanced",
      },
      {
        talent_id: 4,
        skill: "Educational Technology",
        proficiency_level: "Advanced",
      },
      {
        talent_id: 4,
        skill: "Curriculum Development",
        proficiency_level: "Expert",
      },
    ]);

    await queryInterface.bulkInsert("talent_educations", [
      // Education for talent_id: 1
      {
        talent_id: 1,
        institution: "XYZ University",
        degree: "Bachelor of Science in Computer Science",
        field_of_study: "Computer Science",
        graduation_month: "May",
        graduation_year: "2020",
      },
      {
        talent_id: 1,
        institution: "ABC University",
        degree: "Master of Science in Software Engineering",
        field_of_study: "Software Engineering",
        graduation_month: "June",
        graduation_year: "2022",
      },
      // Education for talent_id: 2
      {
        talent_id: 2,
        institution: "University of ABC",
        degree: "Bachelor of Business Administration",
        field_of_study: "Finance",
        graduation_month: "May",
        graduation_year: "2021",
      },
      // Education for talent_id: 3
      {
        talent_id: 3,
        institution: "XYZ University of ABC",
        degree: "Bachelor of Marketing",
        field_of_study: "Marketing",
        graduation_month: "April",
        graduation_year: "2022",
      },
      // Education for talent_id: 4
      {
        talent_id: 4,
        institution: "National University of Singapore",
        degree: "Bachelor of Science in Education",
        field_of_study: "Education",
        graduation_month: "June",
        graduation_year: "2017",
      },
      {
        talent_id: 4,
        institution: "Singapore University of Technology and Design",
        degree: "Master of Education in Educational Technology",
        field_of_study: "Educational Technology",
        graduation_month: "December",
        graduation_year: "2019",
      },
    ]);

    await queryInterface.bulkInsert("job_listings", [
      {
        employer_id: 1,
        job_title: "Senior Software Engineer",
        description: "Developing and maintaining web applications.",
        job_responsibility: "Lead development projects.",
        skill_set: "JavaScript, React, Node.js",
        application_start_date: "2024-02-01",
        application_end_date: "2024-02-15",
      },
    ]);

    await queryInterface.bulkInsert("applications", [
      {
        job_listing_id: 1,
        talent_id: 1,
        application_date: new Date(),
        application_status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("chatrooms", [
      {
        application_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("talent_resumes");
    await queryInterface.dropTable("talent_work_experiences");
    await queryInterface.dropTable("talent_skill_sets");
    await queryInterface.dropTable("talent_educations");
    await queryInterface.dropTable("job_listings");
    await queryInterface.dropTable("applications");
    await queryInterface.dropTable("chatrooms");
  },
};
