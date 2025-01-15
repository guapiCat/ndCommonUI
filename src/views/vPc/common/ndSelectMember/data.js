// 树形结构数据 type:1 部门  2 成员
const treeListTemp = [
  {
    id: 1,
    label: '部门 1',
    type: 1,
    uuid: 1,
    children: [
      {
        id: 20,
        label: '成员 1-1',
        type: 2,
        uuid: 11
      },
      {
        id: 4,
        label: '部门1-1',
        type: 1,
        uuid: 555,
        children: [
          {
            id: 9,
            label: '成员 1-1-1',
            type: 2,
            uuid: 666,
            children: [
              {
                id: 9,
                label: '成员 1-1-1-1',
                type: 2,
                uuid: 101,
                children: [
                  {
                    id: 9,
                    label: '成员 1-1-1-1-1',
                    type: 2,
                    uuid: 1231,
                    children: [
                      {
                        id: 9,
                        label: '成员 1-1-1-1-1-1',
                        type: 2,
                        uuid: 231,
                        children: [
                          {
                            id: 9,
                            label: '成员 1-1-1-1-1-1-1',
                            type: 2,
                            uuid: 3231,
                            children: [
                              {
                                id: 9,
                                label: '成员 1-1-1-1-1-1木薯淀粉',
                                type: 2,
                                uuid: 231,
                                children: [
                                  {
                                    id: 9,
                                    label: '成员 1-1-1-1-1-1mskdmf',
                                    type: 2,
                                    uuid: 23199,
                                    children: [
                                      {
                                        id: 9,
                                        label: '成员 1-1-1-1-1-1买买买',
                                        type: 2,
                                        uuid: 2319838,
                                        children: [
                                          {
                                            id: 9,
                                            label: '成员 1-1-1-1-1-1喵喵喵喵喵喵木木木木木木木木木木木木木木木木木木木木木木木木',
                                            type: 2,
                                            uuid: 2318837,
                                            children: [
                                              {
                                                id: 9,
                                                label: 'mmm',
                                                type: 2,
                                                uuid: 23188237,
                                                children: [
                                                  {
                                                    id: 9,
                                                    label: 'mkmksd',
                                                    type: 2,
                                                    uuid: 2318929337
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 10,
            label: '成员 1-1-2',
            type: 2,
            uuid: 1111
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '部门 2',
    uuid: 2,
    disabled: true,
    type: 1,
    children: [
      {
        id: 5,
        label: '成员 2-1',
        type: 2,
        disabled: true,
        uuid: 22
      },
      {
        id: 6,
        label: '成员 2-2',
        type: 2,
        uuid: 222
      }
    ]
  },
  {
    id: 3,
    label: '部门 3',
    type: 1,
    uuid: 3,
    children: [
      {
        id: 7,
        label: '成员 3-1',
        type: 2,
        uuid: 33
      },
      {
        id: 8,
        label: '成员 3-2',
        type: 2,
        uuid: 333
      }
    ]
  },
  {
    id: 4,
    label: '部门 4',
    type: 1,
    uuid: 4,
    children: [
      {
        id: 44,
        label: '成员 4-1',
        type: 2,
        uuid: 44
      },
      {
        id: 44,
        label: '成员 4-2',
        type: 2,
        uuid: 444
      }
    ]
  },
  {
    id: 3,
    label: '部门 5',
    type: 1,
    uuid: 5,
    children: [
      {
        id: 7,
        label: '成员 5-1',
        type: 2,
        uuid: 55
      },
      {
        id: 8,
        label: '成员 5-2',
        type: 2,
        uuid: 555
      }
    ]
  },
  {
    id: 6,
    label: '部门 6',
    type: 1,
    uuid: 6,
    children: [
      {
        id: 7,
        label: '成员 6-1',
        type: 2,
        uuid: 66
      },
      {
        id: 8,
        label: '成员 6-2',
        type: 2,
        uuid: 666
      }
    ]
  }
]
// 默认被勾选的集合
const checkedListTemp = [
  { id: 7, label: '成员 3-1', type: 2, uuid: 33 }
]
const searchListTemp = [
  {
    id: 1,
    label: '部门 1',
    type: 1,
    uuid: 1
  },
  {
    id: 20,
    label: '成员 1-1',
    type: 2,
    uuid: 11
  },
  {
    id: 4,
    label: '部门1-1',
    type: 1,
    uuid: 555
  },
  {
    id: 9,
    label: '成员 1-1-1',
    type: 1,
    uuid: 111
  },
  {
    id: 10,
    label: '成员 1-1-2',
    type: 2,
    uuid: 1111
  },
  {
    id: 2, label: '部门 2', uuid: 1, disabled: true, type: 1
  },
  {
    id: 5,
    label: '成员 2-1',
    type: 2,
    disabled: true,
    uuid: 22
  },
  {
    id: 6,
    label: '成员 2-2',
    type: 2,
    uuid: 222
  },
  {
    id: 3,
    label: '部门 3',
    type: 1,
    uuid: 3
  },
  {
    id: 7,
    label: '成员 3-1',
    type: 2,
    uuid: 33
  },
  {
    id: 8,
    label: '成员 3-2',
    type: 2,
    uuid: 333
  },
  {
    id: 8,
    label: '成员 3-1',
    type: 2,
    uuid: 333
  },
  {
    id: 8,
    label: '成员 3-1',
    type: 2,
    uuid: 333
  },
  {
    id: 8,
    label: '成员 3-1',
    type: 2,
    uuid: 333
  },
  {
    id: 8,
    label: '成员 3-1',
    type: 2,
    uuid: 333
  },
  {
    id: 8,
    label: '成员 3-1',
    type: 2,
    uuid: 333
  }
]
const roleListTemp = [
  {
    roleId: 1,
    roleName: '管理员'
  }, {
    roleId: 2,
    roleName: 'CEO'
  }, {
    roleId: 3,
    roleName: 'CTO'
  }, {
    roleId: 4,
    roleName: '财务'
  }, {
    roleId: 5,
    roleName: '研发'
  },
  {
    roleId: 6,
    roleName: '采购'
  }
]
export { treeListTemp, checkedListTemp, searchListTemp, roleListTemp }
