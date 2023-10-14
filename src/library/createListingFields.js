const createListingFields = [
  {
    label: "Job Title",
    input: "text",
  },
  {
    label: "Company Name",
    input: "text",
  },
  {
    label: "Location",
    input: "text",
  },
  {
    label: "Job Type",
    input: "select",
    selections: [
      "full-time",
      "part-time",
      "temporary",
      "contract",
      "internship",
    ],
  },
  {
    label: "Job Category/Industry",
    input: "text",
    //:TODO: Add selection of categories
  },
  {
    label: "Job Description",
    input: "text-area",
  },
  {
    label: "Skills and Qualifications",
    input: "text-area",
  },
  {
    label: "Salary or Compensation",
    input: "slider",
  },
  {
    label: "Application Deadline",
    input: "date",
  },
  {
    label: "Application Instructions",
    input: "text-area",
  },
  {
    label: "Company Description",
    input: "text-area",
  },
  {
    label: "Benefits",
    input: "text-area",
  },
  {
    label: "Contact Information",
    input: "text-area",
  },
  {
    label: "Job Posting Date",
    input: "date",
  },
  {
    label: "Remote Work",
    input: "select",
  },
  {
    label: "Travel Requirements",
    input: "text-area",
  },
  {
    label: "Experience Level",
    input: "text",
  },
  {
    label: "Education Requirements",
    input: "text-area",
  },
  {
    label: "Equal Opportunity Statement",
    input: "text-area",
  },
  {
    label: "Company Logo/Image:",
    input: "file",
  },
  {
    label: "Video Introduction",
    input: "file",
  },
  {
    label: "Job Reference Number",
    input: "text",
  },
  {
    label: "Job Tags/Keywords",
    input: "text-area",
  },
  {
    label: "Company Website",
    input: "text",
  },
];

export default createListingFields;
