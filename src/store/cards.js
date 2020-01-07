export default {
  cards: [
    {
      name: "deep well heating",
      id: "3",
      type: "automated",
      tags: [
        {
          name: "building tag",
          value: "power"
        },
        {
          name: "building tag",
          value: "building"
        },
        {
          name: "raises temperature",
          value: true
        },
        {
          name: "provides power income",
          value: 1
        }
      ],
      cost: 13
    },
    {
      name: "capital",
      id: "8",
      type: "automated",
      tags: [
        {
          name: "building tag",
          value: "city"
        },
        {
          name: "building tag",
          value: "building"
        },
        {
          name: "places city",
          value: true
        },
        {
          name: "costs power income",
          value: 2
        },
        {
          name: "provides megacredit income",
          value: 5
        }
      ]
    },
    {
      name: "martial rails",
      id: "7",
      type: "active",
      tags: [
        {
          name: "building tag",
          value: "city"
        },
        {
          name: "is action",
          value: "true"
        },
        {
          name: "spend power",
          value: true
        }
      ]
    },
    {
      name: "release of inert gases",
      id: "36",
      type: "event",
      tags: [
        {
          name: "building tag",
          value: "event"
        },
        {
          name: "raises TR",
          value: 2
        }
      ]
    }
  ]
};
