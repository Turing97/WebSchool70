/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-05-27 20:08:25
 * @version $Id$
 */
 function checkBoxGroup(checkBoxName, data) {
            var allSelect = document.createElement("input");
            allSelect.setAttribute("type", "checkbox");
            allSelect.setAttribute("checkbox-type", "all");
            allSelect.setAttribute("value", "0");
            var text = document.createTextNode("全选");
            checkBoxName.appendChild(allSelect);
            checkBoxName.appendChild(text);

            for (var i = 0; i < data.length; i++) {
                var select = document.createElement("input");
                select.setAttribute("type", "checkbox");
                select.setAttribute("value", i + 1);
                select.setAttribute("checkbox-type", "single")
                var text = document.createTextNode(data[i].text);
                checkBoxName.appendChild(select);
                checkBoxName.appendChild(text);
            }

            checkBoxName.onclick = function (event) {
                var event = event || window.event;
                var target = event.target || event.srcElement;
                if (target.getAttribute("type") == "checkbox") {
                    var len = checkBoxName.childNodes.length;
                    var count = 0;
                    var checkBoxType = target.getAttribute("checkbox-type");
                    if (checkBoxType == "all") {

                        if (target.checked == true) {
                            for (var i = 2; i < len; i++) {
                                //checkBoxName.childNodes[i].getchecked = true;
                                if (checkBoxName.childNodes[i].tagName == "INPUT") {
                                    checkBoxName.childNodes[i].checked = true;
                                    console.log(checkBoxName.childNodes[i]);
                                }
                            }
                        }
                        else {
                            target.checked = true;

                        }
                    }
                    if (checkBoxType == "single") {
                        for (var i = 2; i < len; i++) {
                            if (checkBoxName.childNodes[i].checked == true) {
                                count++;
                                console.log(checkBoxName.childNodes[i]);
                            }
                        }
                        console.log(count);
                        if (count == len / 2 - 1 && allSelect.checked == false) {
                            allSelect.checked = true;
                        }
                        else if (count < len / 2 - 1 && count > 0) {
                            allSelect.checked = false;
                        }
                        else if (count == 0) {
                            target.checked = true;
                        }
                    }

                }
                createTable();
            }

        }

