$(document).ready(function () 
                  {
                    var oTable = $('#myDatatable').DataTable({
                        "ajax": {
                            "url": 'cont.json',
                            "type": "get",
                            "datatype": "json"
                        },
                        "columns": [
                            {
                                "data": "FirstName",
                                "autoWidth": true
                            },
                            {
                                "data": "LastName",
                                "autoWidth": true
                            },
                            {
                                "data": "EmailID",
                                "autoWidth": true
                            },
                            {
                                "data": "City",
                                "autoWidth": true
                            },
                            {
                                "data": "Country",
                                "autoWidth": true
                            },
                            {
                                "data": "EmployeeID",
                                "width": "50px",
                                "render": function (data) {
                                    return '<a class="popup" href="' + data + '">Edit</a>';
                                }
                    },
                            {
                                "data": "EmployeeID",
                                "width": "50px",
                                "render": function (data) {
                                    return '<a class="popup" href="' + data + '">Delete</a>';
                                }
                    }
                ]
                    })
                    });
