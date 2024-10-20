import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import AddImage from "../../assets/images/add-image.png";
import Change from "../../assets/images/change.png";
import Search from "../../assets/images/search.png";
import Trash from "../../assets/images/trash-blue.png";
import { Employee } from "../../interfaces/Employee";
import { addEmployee, deleteEmployee, getEmployees } from "../../services/employeeService";
import Button from "../button/Button";
import Card from "../card/Card";
import GeneralInput from "../generalInput/GeneralInput";
import Modal from "../modal/Modal";
import Table from "../table/Table";
import { employeeColumns } from "./employeeColumns";
import styles from "./styles.module.css";

export default function Employees() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [imageName, setImageName] = useState<string | null>(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  const columns = employeeColumns(handleDelete);

  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      url: "",
      role: "",
      salary: 0,
      email: "",
      phone: "",
      startDate: "",
      active: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      role: Yup.string().required("Role is required"),
      email: Yup.string().email("Invalid email format").required("E-Mail is required"),
      phone: Yup.string().required("Phone number is required"),
    }),
    onSubmit: async (values) => {
      try {
        await addEmployee(values);
        fetchEmployees();
        closeModal();

        console.log("Form submitted", values);
      } catch (error) {
        console.error("Failed to add employee", error);
      }
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("url", reader.result as string);
      };
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };
  
  const removeImage = () => {
    formik.setFieldValue("url", ""); // Clear formik.url
  };

  const triggerFileInput = () => document.getElementById("imageInput")?.click();

  const isStep1Valid = () => {
    return (
      Boolean(
        formik.values.name &&
        formik.values.role &&
        formik.values.email &&
        formik.values.phone
      ) && !formik.errors.name &&
      !formik.errors.role &&
      !formik.errors.email &&
      !formik.errors.phone
    );
  };

  const isStep2Valid = () => {
    return Boolean(formik.values.url);
  };

  const summary = [
    {
      header: "Employee",
      key: "name" as keyof Employee,
      render: (name: string | number | boolean) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={formik.values.url}
            alt="Employee"
            style={{ width: "28px", height: "28px", borderRadius: "50%" }}
          />
          <span>{name}</span>
        </div>
      ),
    },
    {
      header: "Role",
      key: "role" as keyof Employee,
    },
    { header: "E-Mail", key: "email" as keyof Employee },
    { header: "Phone", key: "phone" as keyof Employee },
  ];

  const date = [
    { header: "Start Date", key: "startDate" as keyof Employee },
  ];

  const status = [
    { 
      header: "Status",
      key: "active" as keyof Employee,
      render: (value: string | number | boolean) => (
        <label className="switch">
          <input type="checkbox" checked={Boolean(value)}  onChange={() => formik.setFieldValue("active", !formik.values.active)} />
          <span className="slider round"></span>
        </label>
      )
    },
  ];

  const steps = [
    {
      title: "Step 1",
      content: (
        <div>
          <GeneralInput
            type="text"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeHolder="Enter Employee Name"
            error={formik.errors.name}
            touched={formik.touched.name}
            onBlur={formik.handleBlur}
          />
          <GeneralInput
            type="date"
            name="startDate"
            label="Start Date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            placeHolder="Start Date"
          />
          <GeneralInput
            type="select"
            name="role"
            label="Role"
            value={formik.values.role}
            onChange={formik.handleChange}
            options={["Select Role", "IT", "Software", "Data Entry"]}
            error={formik.errors.role}
            touched={formik.touched.role}
            onBlur={formik.handleBlur}
          />
          <GeneralInput
            type="email"
            name="email"
            label="E-Mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeHolder="Enter E-Mail"
            error={formik.errors.email}
            touched={formik.touched.email}
            onBlur={formik.handleBlur}
          />
          <GeneralInput
            type="text"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeHolder="Enter Phone Number"
            error={formik.errors.phone}
            touched={formik.touched.phone}
            onBlur={formik.handleBlur}
          />
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className={styles.addImageText}>Add image</p>
          <div className={styles.addImageContainer}>
            {formik.values.url ? (
              <div className={styles.imagePreviewContainer}>
                <img src={formik.values.url} alt="Preview" className={styles.imagePreview} />
                <div>
                  <div className={styles.imageName}>{imageName}</div>
                  <div className={styles.controlersContainer}>
                    <div onClick={triggerFileInput}>
                      <span>
                        <img src={Change} width={16} height={17} alt="change icon" />
                      </span>
                      <span>Change</span>
                    </div>
                    <div onClick={removeImage}>
                      <span>
                        <img src={Trash} width={16} height={16} alt="Trash" />
                      </span>
                      <span>Remove</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.addImageBtn}>
                <img src={AddImage} alt="picture icon" />
                <Button text="add image" addBtn={true} width={166} onClick={triggerFileInput} />
              </div>
            )}
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <div>
            <Card title="summary" rows={summary} data={formik.values} />
          </div>
          <div className={styles.dateActiveContainer}>
            <Card title="date" rows={date} data={formik.values} fontSize={14}/>
            <Card title="active" rows={status} data={formik.values} fontSize={14}/>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginLeft: "30px" }}>
      <div className={styles.header}>
        <p>Employees</p>
      </div>

      <div className={styles.main}>
        <div className={styles.searchAddContaienr}>
          <div className={styles.searchContainer}>
            <img src={Search} width={24} height={24} alt="Search icon" />
            <input type="search" name="search" id="search" placeholder="search employees" />
          </div>
          <div>
            <Button text="new employees" addBtn={true} width={192} onClick={openModal} />
          </div>
        </div>

        <Table columns={columns} data={employees} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="add new employees"
        steps={steps}
        step1Valid={isStep1Valid}
        step2Valid={isStep2Valid}
        onSubmit={formik.handleSubmit}
      />
    </div>
  );
}
