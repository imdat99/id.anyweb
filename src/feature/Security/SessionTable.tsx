import { IconPhoneStroke } from "@kousum/semi-icons-vue";
import {
    Button,
    type ColumnProps,
    type RowSelection,
    Table
} from "@lethdat/semi-ui-vue";
import { defineComponent, onMounted, ref } from "vue";

interface DataType {
  key: string;
  name: string;
  owner: string;
  size: number;
  updateTime: number;
  avatarBg: string;
}

const DAY = 24 * 60 * 60 * 1000;
const figmaIconUrl =
  "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png";

const columns: ColumnProps<DataType>[] = [];

const SessionTable = defineComponent(() => {
  const dataSource = ref<DataType[]>([]);

  const rowSelection: RowSelection<DataType> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Michael James", // Column configuration not to be checked
      name: record.name,
    }),
  };
  const scroll = { y: 300 };

  const getData = (): DataType[] => {
    const data = [];
    for (let i = 0; i < 46; i++) {
      const isSemiDesign = i % 2 === 0;
      const randomNumber = (i * 1000) % 199;
      data.push({
        key: "" + i,
        name: isSemiDesign
          ? `Semi Design 设计稿${i}.fig`
          : `Semi D2C 设计稿${i}.fig`,
        owner: isSemiDesign ? "姜鹏志" : "郝宣",
        size: randomNumber,
        updateTime: new Date().valueOf() + randomNumber * DAY,
        avatarBg: isSemiDesign ? "grey" : "red",
      });
    }
    return data;
  };

  onMounted(() => {
    const data = getData();
    dataSource.value = data;
  });
  //   const Table = TableMaker<DataType>()
  return () => (
    <Table
      dataSource={getData()}
      columns={[
        {
          title: "Phiên đăng nhập",
          dataIndex: "name",
          render: (text, record, index) => {
            return (
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <IconPhoneStroke
                      size="extra-large"
                      class="fas fa-tablet-alt text-blue-600"
                    />
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium ">iPad Pro</p>
                  <p class="text-sm text-gray-500">TP. Hồ Chí Minh, Việt Nam</p>
                  <p class="text-sm text-gray-500">Hoạt động 3 ngày trước</p>
                  <p class="text-xs text-gray-400">
                    Đăng nhập lần cuối: 3 ngày trước, 14:20
                  </p>
                </div>
              </div>
            );
          }
        },
        {
          title: "Action",
          align: "center",
          dataIndex: "updateTime",
          render: (value) => {
            return <Button type="tertiary">Đăng xuất</Button>;
          },
        },
      ]}
      rowSelection={rowSelection}
      pagination={{
        pageSizeOpts: [5, 10, 20, 50, 100],
        showSizeChanger: true,
        onPageSizeChange: (pageSize) => {
          console.log("pageSize", pageSize);
        },
      }}
      //   scroll={scroll}
    />
  );
});
export default SessionTable;
