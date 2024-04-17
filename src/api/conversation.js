import axios from 'axios';

export const getHistories = async() => {
    try {
        const fakeData = {
                "items": [{
                        "id": "7025d17b-c824-4e1e-be60-6b7a6d1a9d66",
                        "title": "Chào ChatGPT!",
                        "create_time": "2024-04-12T16:38:27.078254+00:00",
                        "update_time": "2024-04-12T16:40:16.282530+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "42d44c7c-7d47-4ed8-951e-cbe1912bb7e7",
                        "title": "Cài đặt Ubuntu: Xem ứng dụng.",
                        "create_time": "2024-04-12T08:30:42.851929+00:00",
                        "update_time": "2024-04-12T08:36:10.720991+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "1190259b-6eb2-402f-b613-62cb5a4eba03",
                        "title": "Prediction Error Metrics: English",
                        "create_time": "2024-04-05T18:53:06.987857+00:00",
                        "update_time": "2024-04-05T19:41:51.201583+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "17e0e91b-a64c-405e-8e11-890cdf133411",
                        "title": "PostgreSQL: Mã nguồn mở",
                        "create_time": "2024-04-04T13:49:40.565913+00:00",
                        "update_time": "2024-04-04T13:50:05.970961+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "578f2681-83cb-4683-b9cf-41a53cf7e359",
                        "title": "PostgreSQL Bảng Tạo",
                        "create_time": "2024-04-04T13:49:18.140435+00:00",
                        "update_time": "2024-04-04T13:49:29.256530+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "80968d9e-23cd-438a-9cd9-21d0960b2fb7",
                        "title": "Convert Coordinates Google Maps",
                        "create_time": "2024-04-04T12:14:02.299933+00:00",
                        "update_time": "2024-04-04T13:28:27.225268+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "f77453d0-6a39-477b-93e5-d1251104e128",
                        "title": "Map Component Setup Guide",
                        "create_time": "2024-04-04T10:50:17.510732+00:00",
                        "update_time": "2024-04-04T11:58:38.580335+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "02957924-9c07-4c3a-802d-b454c668729e",
                        "title": "Popup hiển thị thông tin",
                        "create_time": "2024-04-04T09:49:36.996175+00:00",
                        "update_time": "2024-04-04T09:51:33.875793+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "72f80037-926f-4463-96a3-780a95d0aff8",
                        "title": "Hiển Thị Điểm Bản Đồ",
                        "create_time": "2024-04-04T09:49:18.559091+00:00",
                        "update_time": "2024-04-04T09:49:35.484651+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "7b38ead6-d032-4c46-93b0-2a3c8ca5a030",
                        "title": "",
                        "create_time": "2024-04-04T09:47:29.246681+00:00",
                        "update_time": "2024-04-04T09:47:54.247321+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "7a2f3ded-fce0-4ef9-9f3a-9c5d165421ce",
                        "title": "Thêm cấu trúc file",
                        "create_time": "2024-04-03T00:31:26.840597+00:00",
                        "update_time": "2024-04-03T22:25:44.299356+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "da36b66c-b577-4519-9f7f-ef802e53b86c",
                        "title": "OpenLayers Hiển Thị GeoJSON",
                        "create_time": "2024-04-03T08:45:49.612242+00:00",
                        "update_time": "2024-04-03T09:43:36.083260+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "b46f89d0-57d4-4281-8811-39f5fb2be95d",
                        "title": "Express CORS Setup",
                        "create_time": "2024-04-03T06:06:19.986667+00:00",
                        "update_time": "2024-04-03T06:08:15.734767+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "33cdb77f-eec7-4993-9717-8260ca7ad7eb",
                        "title": "Welcome Polish Experts My Son",
                        "create_time": "2024-04-03T02:09:19.545266+00:00",
                        "update_time": "2024-04-03T02:11:43.208782+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "2d4fc376-0107-45d6-9dbc-be851068761c",
                        "title": "Nội dung file nhớ",
                        "create_time": "2024-04-03T00:26:09.665641+00:00",
                        "update_time": "2024-04-03T00:26:11.823996+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "4c0386ab-6aa9-4fa5-9e89-73a4f53f93f2",
                        "title": "Thay Phím Bằng Text Replacement",
                        "create_time": "2024-04-02T13:52:25.750787+00:00",
                        "update_time": "2024-04-02T13:53:08.137229+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "72913e7c-7e60-4725-99fa-fa28742e3e5c",
                        "title": "Đổi mật khẩu PostgreSQL",
                        "create_time": "2024-04-02T02:11:09.980785+00:00",
                        "update_time": "2024-04-02T02:11:16.650934+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "38bb0ae4-27d6-4999-adee-a8fe774dcf56",
                        "title": "Express, EJS, Leaflet Integration",
                        "create_time": "2024-04-01T11:07:52.848170+00:00",
                        "update_time": "2024-04-01T16:27:57.553980+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "1deefab0-2c8d-441f-86ad-a427f5943a4a",
                        "title": "Đà Nẵng Map Start",
                        "create_time": "2024-04-01T10:33:27.120683+00:00",
                        "update_time": "2024-04-01T11:06:21.834701+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "cc827626-15f9-473d-92b1-2b33a03a356c",
                        "title": "Empty request assistance",
                        "create_time": "2024-04-01T09:33:33.411326+00:00",
                        "update_time": "2024-04-01T10:11:56.958865+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "92b33e54-5a33-467d-a0a5-ed298b810446",
                        "title": "Xem lại commit trong Git",
                        "create_time": "2024-03-30T06:28:14.828209+00:00",
                        "update_time": "2024-03-30T07:09:40.798836+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "d8ec12d3-1ed9-44ae-818c-e2bb8b94e1ca",
                        "title": "Lưu CSV từ Indeed",
                        "create_time": "2024-03-30T03:15:20.353689+00:00",
                        "update_time": "2024-03-30T03:15:31.365952+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "dfdf1ace-7fd1-4148-8cc2-9fa5eac6044e",
                        "title": "Data Host Locations",
                        "create_time": "2024-03-29T12:31:47.378230+00:00",
                        "update_time": "2024-03-29T12:33:47.886238+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "3cded046-00bf-4e73-b95a-fc3b9b31ce08",
                        "title": "Tính tổng lương chức vụ",
                        "create_time": "2024-03-26T11:12:52.547558+00:00",
                        "update_time": "2024-03-29T12:16:30.439413+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "4e35d23b-afcc-43c4-b466-3b057ed22460",
                        "title": "Ranh giới không rõ ràng",
                        "create_time": "2024-03-29T06:12:45.457326+00:00",
                        "update_time": "2024-03-29T06:13:26.220279+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "caca91c7-057c-4c6d-9123-5717fac61fa7",
                        "title": "Tiên tiến công nghệ.",
                        "create_time": "2024-03-29T05:31:33.506382+00:00",
                        "update_time": "2024-03-29T05:31:38.019585+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "4671bc34-0902-42f5-a68e-d860b3f048d1",
                        "title": "Bảng thống kê sản phẩm.",
                        "create_time": "2024-03-29T03:41:44.084014+00:00",
                        "update_time": "2024-03-29T04:36:58.273703+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    },
                    {
                        "id": "8cc90b70-afbc-40e1-b832-ddf35225cf1f",
                        "title": "Senior Java Skills: Comprehensive RequirementsSenior Java Skills: Comprehensive Requirements",
                        "create_time": "2024-03-29T02:56:00.793473+00:00",
                        "update_time": "2024-03-29T03:39:19.008329+00:00",
                        "mapping": null,
                        "current_node": null,
                        "conversation_template_id": null,
                        "gizmo_id": null,
                        "is_archived": false,
                        "workspace_id": null
                    }
                ],
                "total": 540,
                "limit": 28,
                "offset": 0,
                "has_missing_conversations": false
            }
            // delay 2 seconds before returning the fake data
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(fakeData);
            }, 2000);
        });
        //
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/histories`);
        // return response.data;
    } catch (error) {
        throw error;
    }
};