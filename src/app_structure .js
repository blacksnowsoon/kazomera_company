export default function siteStructure(lang) {
  return {
    firstNav: {
      logo: {
        logoImg: "/assets/site-logos/logo.png",
        siteName: "Kazomera",
      },
      searchForm: {
        icon: "BsSearch",
        placeholder: lang === "ar" ? "بحث" : "Search",
      },
      options: {
        langOptions: {
          en: "English",
          ar: "عربي",
        },
        notifications: {
          icon: "BsBell",
          count: 5,
        },
      },
    },
    secondNav: {
      links: [
        {
          name: lang === "ar" ? "الأخبار" : "News",
          route: "/",
          icon: "BsNewspaper",
        },
        {
          name: lang === "ar" ? "استثمارات" : "Investments",
          route: "/investments",
          icon: "BsFillBarChartLineFill",
        },
        {
          name: lang === "ar" ? "مساهمات" : "Contributions",
          route: "/contributions",
          icon: "FaRegHandshake",
        },
        {
          name: lang === "ar" ? "مشروعات" : "Projects",
          route: "/projects",
          icon: "TbSquareLetterP",
        },
        {
          name: lang === "ar" ? "كازوميرا" : "Kazomera",
          route: "/kazomera",
          icon: "",
        },
        {
          name: lang === "ar" ? "حسابي" : "Profile",
          route: "/profile",
          icon: "TbUserCircle",
        },
      ],
    },
    sideNav: {
      createMenu: [
        {
          id: 1,
          icon: "IoIosAddCircleOutline",
          title: lang === "ar" ? "إنشاء مشروع" : "Project establishment",
          to: "/create",
        },
        {
          id: 2,
          icon: "IoIosAddCircleOutline",
          title: lang === "ar" ? "تقديم مساهمة" : "Make a contribution",
          to: "/contribute",
        },
      ],
      sideMenu: [
        {
          id: 1,
          icon: "TbSquareLetterP",
          title: lang === "ar" ? "مشروعاتي" : "My projects",
          to: "/projects",
        },
        {
          id: 2,
          icon: "FaRegHandshake",
          title: lang === "ar" ? "مساهماتي" : "My contributions",
          to: "/contributions",
        },
        {
          id: 3,
          icon: "SiHandshake",
          title: lang === "ar" ? "صفقاتي" : "My deals",
          to: "/deals",
        },
      ],
      interestsMenu: [
        {
          id: 1,
          icon: "HiOutlineStar",
          title: lang === "ar" ? "اهتماماتي" : "Interests",
          to: "/interests",
        },
        {
          id: 2,
          icon: "HiOutlineUserGroup",
          title: lang === "ar" ? "شبكة علاقاتي" : "Connections",
          to: "/relations",
        },
        {
          id: 3,
          icon: "CiBookmark",
          title: lang === "ar" ? "العناصر المحفوظة" : "Saved items",
          to: "/reserved",
        },
      ],
    },
    ProjectEstablishment: {
      projectInfo: [
        {
          id: 1,
          title: lang === "ar" ? "المجال" : "Field",
        },
        {
          id: 2,
          title: lang === "ar" ? "الوصف" : "Description",
        },
        {
          id: 3,
          title: lang === "ar" ? "التصنيف" : "Category",
        },
        {
          id: 4,
          title: lang === "ar" ? "المرحلة" : "Phase",
        },
        {
          id: 5,
          title: lang === "ar" ? "الموقع" : "Location",
        },
        {
          id: 6,
          title: lang === "ar" ? "المشكلة" : "Problem",
        },
        {
          id: 7,
          title: lang === "ar" ? "الماليات" : "Finances",
        },
        {
          id: 8,
          title: lang === "ar" ? "مرحلة التمويل" : "Funding phase",
        },
        {
          id: 9,
          title: lang === "ar" ? "فريق العمل" : "Staff",
        },
        {
          id: 10,
          title: lang === "ar" ? "المنافسين" : "Competitors",
        },
        {
          id: 11,
          title: lang === "ar" ? "الميزة التنافسية" : "Competitive advantage",
        },
        {
          id: 12,
          title: lang === "ar" ? "الملفات" : "Files",
        },
        {
          id: 13,
          title: lang === "ar" ? "الحساب البنكي" : "Bank account",
        },
        {
          id: 14,
          title: lang === "ar" ? "المنتجات" : "Products",
        },
        {
          id: 15,
          title: lang === "ar" ? "الخدمات" : "Services",
        },
        {
          id: 16,
          title: lang === "ar" ? "الهدايا" : "Gifts",
        },
        {
          id: 17,
          title: lang === "ar" ? "العروض" : "Offers",
        },
        {
          id: 18,
          title: lang === "ar" ? "القسيمات" : "Coupons",
        },
        {
          id: 19,
          title: lang === "ar" ? "المعرض" : "Gallery",
        },
        {
          id: 20,
          title: lang === "ar" ? "الاخبار" : "News",
        },
        {
          id: 21,
          title: lang === "ar" ? "قسم جديد" : "New field",
        },
        {
          id: 22,
          title: lang === "ar" ? "اضافة قسم" : "Add a field",
        },
      ],
      CompetitorsInput: {
        label: lang === "ar" ? "المنافسين" : "Competitors",
        placeholder:
          lang === "ar"
            ? "........من هم منافسيك"
            : "Who is your competitors........",
      },
      CompetitorsAdvantageInput: {
        label: lang === "ar" ? "الميزه التنافسيه" : "Competitors advantages",

        placeholder:
          lang === "ar"
            ? "......ما هي الاشياء التي تميزك منافسيك"
            : "What is the things that set you apart from your competitors........",
      },
      filesInput: {
        name: {
          label: lang === "ar" ? "الاسم" : "Name",
          placeholder:
            lang === "ar"
              ? "اكتب اسما يصف الملفات التي تليه"
              : "Write a name that describe the next files",
        },
        description: {
          label: lang === "ar" ? "الوصف" : "Description",
          placeholder: "....",
        },
      },
      /*
       الحساب البنكي
      */
      bankAccountInput: {
        title: lang === "ar" ? "الحساب البنكي" : "Bank account",
        accountName: {
          label: lang === "ar" ? "اسم الحساب" : "Account name",
          placeholder:
            lang === "ar"
              ? ".....اكتب اسم حسابك البنكي"
              : "Write your account's bank name......",
        },
        accountNumber: {
          label: lang === "ar" ? "رقم الحساب" : "Account number",
          placeholder:
            lang === "ar"
              ? ".....اكتب رقم حسابك البنكي"
              : "Write your account's bank number.....",
        },
        bankName: {
          label: lang === "ar" ? "اسم البنك" : "Bank name",
          placeholder:
            lang === "ar"
              ? "اسم البنك الذي تضع فيه هذا الحساب"
              : "The name of the bank where you place your account",
        },
      },
      products: {
        productName: {
          label: lang === "ar" ? "اسم المنتج" : "Product name",
          placeholder: "اكتب اسم المنتج",
        },
        lowestPrice: {
          label: lang === "ar" ? "السعر الادني" : "Lowest price",
          placeholder: "0000000000000",
        },
        description: {
          label: lang === "ar" ? "الوصف" : "Description",
          placeholder: "اكتب مواصفات المنتج",
        },
      },
      gifts: {
        giftName: {
          label: lang === "ar" ? "اسم الهديه" : "Gift name",
          placeholder: "اكتب اسم الهديه",
        },
        giftDescription: {
          label: lang === "ar" ? "وصف الهديه" : "gift description",
          placeholder: "اكتب وصفا لتلك الهدية",
        },
      },
      /* المتطلبات
       */
      requirements: {
        title: lang === "ar" ? "المتطلبات" : "Requirements",

        requirementsInfo: [
          {
            id: 1,
            title: lang === "ar" ? "التمويل" : "Funding",
          },
          {
            id: 2,
            title: lang === "ar" ? "الفريق" : "Team",
          },
          {
            id: 3,
            title: lang === "ar" ? "المكان" : "Place",
          },
          {
            id: 4,
            title: lang === "ar" ? "المعدات" : "Equipment",
          },
          {
            id: 5,
            title: lang === "ar" ? "التجهيزات" : "Supplies",
          },
          {
            id: 6,
            title: lang === "ar" ? "المنتجات" : "Products",
          },
          {
            id: 7,
            title: lang === "ar" ? "الخدمات" : "Services",
          },
          {
            id: 8,
            title: lang === "ar" ? "اضافة قسم" : "Add a field",
          },
        ],
        funding: {
          title: lang === "ar" ? "التمويل" : "Funding",

          sector: {
            label: lang === "ar" ? "القطاع" : "Sector",
            placeholder: ".....في اي قطاع ينتمي هذا المشروع",
          },
          field: {
            label: lang === "ar" ? "المجال" : "Field",
            placeholder: ".....في اي مجال في هذا القطاع",
          },
          specialization: {
            label: lang === "ar" ? "التخصص" : "Specialization",
            placeholder: ".....في اي تخصص في هذا المجال",
          },
        },
        team: {
          label: lang === "ar" ? "الفريق" : "Team",
          placeholder: ".....اكتب سطر او اكثر عن وصف المشروع",
        },
      },
    },
    /*تقديم المساهمه
     */
    makeContribution: {
      makeContributionInfo: [
        {
          id: 1,
          title: lang === "ar" ? "المساهمة" : "Contribution",
        },
        {
          id: 2,
          title: lang === "ar" ? "المشروعات المستهدفة" : "Targeted projects",
        },
        {
          id: 3,
          title: lang === "ar" ? "العروض" : "Offers",
        },
        {
          id: 4,
          title:
            lang === "ar"
              ? "توزيعة العروض و المشروعات"
              : "Distribution of offers and projects",
        },
        {
          id: 5,
          title:
            lang === "ar" ? "الاراء و الاستفسارات" : "Opinions and inquiries",
        },
        {
          id: 6,
          title: lang === "ar" ? "طلبات المساهمة" : "Contibution requests",
        },
        {
          id: 7,
          title: lang === "ar" ? "الاخبار" : "News",
        },
      ],
      title: lang === "ar" ? "معلومات المساهمة" : "Contribution infos",

      contributionInfos: [
        {
          id: 1,
          title: lang === "ar" ? "المتطلب" : "Requirement",
        },
        {
          id: 2,
          title: lang === "ar" ? "المجال" : "Field",
        },
        {
          id: 3,
          title: lang === "ar" ? "الوصف" : "Description",
        },
        {
          id: 4,
          title: lang === "ar" ? "الموقع" : "Location",
        },
        {
          id: 5,
          title: lang === "ar" ? "المعرض" : "Gallery",
        },
        {
          id: 6,
          title: lang === "ar" ? "التصنيف" : "Classification",
        },
      ],
      /* المتطلب
       */
      requirements: {
        title: lang === "ar" ? "المتطلب" : "Requirements",

        description:
          lang === "ar"
            ? "يمكنك اختيار اي من تلك العناصر لتظهر في خانة المتطلب لتلك المساهمة في صندوق المعلومات الخاص بها سواء في صفحة الاخبار او صفحة المساهمات"
            : "You can choose any of these items to appear in the requirement field for that contribution in its information box, whether on the news page or the contributions page",
        options: [
          {
            id: 1,
            option: lang === "ar" ? "المتطلب" : "Requirements",
          },
          {
            id: 2,
            option: lang === "ar" ? "الفريق" : "Team",
          },
          {
            id: 3,
            option: lang === "ar" ? "المكان" : "Place",
          },
          {
            id: 4,
            option: lang === "ar" ? "المعدات" : "Equipments",
          },
          {
            id: 5,
            option: lang === "ar" ? "التجهيزات" : "Supplies",
          },
          {
            id: 6,
            option: lang === "ar" ? "المنتجات" : "Products",
          },
          {
            id: 7,
            option: lang === "ar" ? "الخدمات" : "Services",
          },
          {
            id: 8,
            option: lang === "ar" ? "ورشة" : "Workshop",
          },
          {
            id: 9,
            option: lang === "ar" ? "مصنع" : "Factory",
          },
          {
            id: 10,
            option: lang === "ar" ? "شركة" : "Company",
          },
          {
            id: 11,
            option: lang === "ar" ? "شركة ناشئة" : "Startup",
          },
          {
            id: 12,
            option: lang === "ar" ? "أخرى" : "Other",
          },
        ],
      },
      /*المجال
       */
      field: {
        title: lang === "ar" ? "المجال" : "Field",

        sector: {
          label: lang === "ar" ? "القطاع" : "Sector",
          placeholder: ".....في اي قطاع ينتمي هذا المشروع",
        },
        field: {
          label: lang === "ar" ? "المجال" : "Field",
          placeholder: ".....في اي مجال في هذا القطاع",
        },
        specialization: {
          label: lang === "ar" ? "التخصص" : "Specialization",
          placeholder: ".....في اي تخصص في هذا المجال",
        },
      },
      /*الوصف
       */
      description: {
        label: lang === "ar" ? "الوصف" : "Description",
        placeholder: "......اكتب سطر او اكثر عن وصف المشروع",
      },
      /*الموقع
       */
      location: {
        title: lang === "ar" ? "الموقع" : "Location",
        country: {
          label: lang === "ar" ? "الدوله" : "Country",
          placeholder: "اسم الدوله",
        },
        principality: {
          label: lang === "ar" ? "الاماره" : "Principality",
          placeholder: "اسم الاماره",
        },
        centre: {
          label: lang === "ar" ? "المركز" : "Centre",
          placeholder: "",
        },
        district: {
          label: lang === "ar" ? "الحي" : "District",
          placeholder: "",
        },
      },
      /*التصنيف
       */
      classifications: {
        title: lang === "ar" ? "التصنيف" : "Classifications",
        options: [
          {
            id: 1,
            option: lang === "ar" ? "التصنيف" : "Classifications",
          },
          {
            id: 2,
            option: lang === "ar" ? "فرشة" : "Scrub",
          },
          {
            id: 3,
            option: lang === "ar" ? "نصبة" : "Place",
          },
          {
            id: 4,
            option: lang === "ar" ? "عربة" : "Carriage",
          },
          {
            id: 5,
            option: lang === "ar" ? "عمل منزلي" : "House work",
          },
          {
            id: 6,
            option: lang === "ar" ? "عمل حر" : "Freelancing",
          },
          {
            id: 7,
            option: lang === "ar" ? "محل تجاري" : "Store",
          },
          {
            id: 8,
            option: lang === "ar" ? "مساحة عمل مشتركة" : "Co-working space",
          },
          {
            id: 9,
            option: lang === "ar" ? "مخزن" : "Storehouse",
          },
          {
            id: 10,
            option: lang === "ar" ? "ورشة" : "Workshop",
          },
          {
            id: 11,
            option: lang === "ar" ? "مصنع" : "Factory",
          },
          {
            id: 12,
            option: lang === "ar" ? "شركة" : "Company",
          },
          {
            id: 13,
            option: lang === "ar" ? "شركة ناشئة" : "Startup",
          },
          {
            id: 14,
            option: lang === "ar" ? "أخرى" : "Other",
          },
        ],

        description: {
          placeholder: "التفاصيل",
        },
      },
    },
    /*المشروعات المستهدفه
     */ targetedProjects: {
      title: lang === "ar" ? "المشروعات المستهدفه" : "Targeted Projects",
      targetedProjectsInfo: [
        {
          id: 1,
          title: lang === "ar" ? "مشروع 1" : "project 1",
        },
        {
          id: 2,
          title: lang === "ar" ? "مشروع 2" : "project 2",
        },
        {
          id: 3,
          title: lang === "ar" ? "مشروع 3" : "project 3",
        },
        {
          id: 4,
          title: lang === "ar" ? "مشروع 4" : "project 4",
        },
      ],
      projectInfos: [
        {
          id: 1,
          title: lang === "ar" ? "المجال" : "Field",
        },
        {
          id: 2,
          title: lang === "ar" ? "الوصف" : "Description",
        },
        {
          id: 3,
          title: lang === "ar" ? "التصنيف" : "Category",
        },
        {
          id: 4,
          title: lang === "ar" ? "المرحلة" : "Phase",
        },
        {
          id: 5,
          title: lang === "ar" ? "الموقع" : "Location",
        },
        {
          id: 6,
          title: lang === "ar" ? "المشكلة" : "Problem",
        },
        {
          id: 7,
          title: lang === "ar" ? "الماليات" : "Finances",
        },
        {
          id: 8,
          title: lang === "ar" ? "مرحلة التمويل" : "Funding phase",
        },
        {
          id: 9,
          title: lang === "ar" ? "فريق العمل" : "Staff",
        },
        {
          id: 10,
          title: lang === "ar" ? "المنتجات" : "Products",
        },
        {
          id: 11,
          title: lang === "ar" ? "الخدمات" : "Services",
        },
      ],
      description: {
        label: lang === "ar" ? "الوصف" : "Description",
        placeholder: "......اكتب سطر او اكثر عن وصف المشروع",
      },

      classifications: {
        title: lang === "ar" ? "التصنيف" : "Classifications",
        options: [
          {
            id: 1,
            option: lang === "ar" ? "التصنيف" : "Classifications",
          },
          {
            id: 2,
            option: lang === "ar" ? "فرشة" : "Scrub",
          },
          {
            id: 3,
            option: lang === "ar" ? "نصبة" : "Place",
          },
          {
            id: 4,
            option: lang === "ar" ? "عربة" : "Carriage",
          },
          {
            id: 5,
            option: lang === "ar" ? "عمل منزلي" : "House work",
          },
          {
            id: 6,
            option: lang === "ar" ? "عمل حر" : "Freelancing",
          },
          {
            id: 7,
            option: lang === "ar" ? "محل تجاري" : "Store",
          },
          {
            id: 8,
            option: lang === "ar" ? "مساحة عمل مشتركة" : "Co-working space",
          },
          {
            id: 9,
            option: lang === "ar" ? "مخزن" : "Storehouse",
          },
          {
            id: 10,
            option: lang === "ar" ? "ورشة" : "Workshop",
          },
          {
            id: 11,
            option: lang === "ar" ? "مصنع" : "Factory",
          },
          {
            id: 12,
            option: lang === "ar" ? "شركة" : "Company",
          },
          {
            id: 13,
            option: lang === "ar" ? "شركة ناشئة" : "Startup",
          },
          {
            id: 14,
            option: lang === "ar" ? "أخرى" : "Other",
          },
        ],
      },
      description1: {
        placeholder: "التفاصيل",
      },

      /*المرحلة*/
      phase: {
        title: lang === "ar" ? "المرحلة" : "phase",
        options: [
          {
            id: 1,
            option: lang === "ar" ? "المرحلة" : "Phase",
          },
          {
            id: 2,
            option: lang === "ar" ? "فكرة" : "Idea",
          },
          {
            id: 3,
            option: lang === "ar" ? "نموذج مبدئي" : "Prototype",
          },
          {
            id: 4,
            option: lang === "ar" ? "تحت التجهيز" : "Under processing",
          },
          {
            id: 5,
            option: lang === "ar" ? "تحت التشغيل" : "Under operation",
          },
          {
            id: 6,
            option: lang === "ar" ? "في مرحلة النمو" : "In the growth phase",
          },
        ],
        description: {
          placeholder: "التفاصيل",
        },
      },
      /*الموقع
       */
      location: {
        title: lang === "ar" ? "الموقع" : "location",

        country: {
          placeholder: "اسم الدوله",
        },
        principality: {
          placeholder: "اسم الاماره",
        },
        centre: {
          placeholder: "",
        },
        district: {
          placeholder: "",
        },
      } /*المشكله */,
      problem: {
        label: lang === "ar" ? "المشكله" : "problem",
        placeholder:
          "......... اكتب سطر أو أكثر عن وصف المشكلة التي يحاول هذا المشروع حلها",
      },

      /*   الماليات   */
      finances: {
        title: lang === "ar" ? "الماليات" : "Finances",
        revenue: {
          label: lang === "ar" ? "الايرادات" : "revenue",
          placeholder: "0000000000000",
        },
        costs: {
          label: lang === "ar" ? "التكاليف" : "costs",
          placeholder: "0000000000000",
        },
        profits: {
          label: lang === "ar" ? "الارباح" : "profits",
          placeholder: "0000000000000",
        },
        currency: {
          label: lang === "ar" ? "العملة" : "currency",
          placeholder: "$",
        },

        /* الفترة الزمنيه */
        timePeriod: {
          title: lang === "ar" ? "الفترة الزمنيه " : "Time period",

          options: [
            {
              id: 1,
              title: lang === "ar" ? "شهريا" : "Monthly",
            },
            {
              id: 2,
              title: lang === "ar" ? "سنويا" : "yearly",
            },
          ],
        },
      },

      /* مرحلة التمويل */
      fundingPhase: {
        title: lang === "ar" ? "مرحلة التمويل " : "Funding phase",

        options: [
          {
            id: 1,
            option: lang === "ar" ? "مرحلة التمويل" : "Funding Phase",
          },
          {
            id: 2,
            option: lang === "ar" ? "البذرة" : "Idea",
          },
          {
            id: 3,
            option: lang === "ar" ? "الجولة أ" : "Round A",
          },
          {
            id: 4,
            option: lang === "ar" ? "الجولة ب" : "Round B",
          },
          {
            id: 5,
            option: lang === "ar" ? "الجولة ج" : "Round G",
          },
          {
            id: 6,
            option: lang === "ar" ? "الجولة د" : "Round D",
          },
          {
            id: 7,
            option: lang === "ar" ? "الجولة ر" : "Round R",
          },
          {
            id: 8,
            option:
              lang === "ar"
                ? "الطرح في البورصة "
                : "Offering on the stock exchange",
          },
          {
            id: 9,
            option: lang === "ar" ? "اخري" : "Other",
          },
        ],
        description: {
          placeholder: "التفاصيل",
        },
      },

      /* فريق العمل  */
      staff: {
        title: lang === "ar" ? " فريق العمل  " : "Staff",

        numberOfEmployees: {
          label: lang === "ar" ? "عدد العاملين" : "Number of employees",
          placeholder: "",
        },
        personnelJobs: {
          label: lang === "ar" ? "وظاىف العاملين" : "Personnel jobs",
          placeholder: "",
        },
        personnelLocations: {
          label: lang === "ar" ? "مواقع العاملين" : "Personnel locations",
          placeholder: "",
        },
        moreDetails: {
          placeholder: "اكتب المزيد من التفاصيل",
        },
      },
      /* المنتجات */
      products: {
        title: lang === "ar" ? "المنتجات" : "Products",
        productName: {
          label: lang === "ar" ? "اسم المنتج" : "Product name",
          placeholder: "اكتب اسم المنتج",
        },
        description: {
          label: lang === "ar" ? "الوصف" : "Description",
          placeholder: "اكتب مواصفات المنتج",
        },
      },
      services: {
        title: lang === "ar" ? "الخدمات" : "Services",
        serviceName: {
          label: lang === "ar" ? "اسم الخدمه" : "Service name",
          placeholder: "اكتب اسم الخدمه",
        },
        description: {
          label: lang === "ar" ? "الوصف" : "Description",
          placeholder: "اكتب وصف الخدمه",
        },
      },
    },
    /* العروض */
    offers: {
      title: lang === "ar" ? "العروض" : "Offers",
      offersInfo: [
        {
          id: 1,
          offer: lang === "ar" ? "العرض الاول" : "First offer",
        },
        {
          id: 2,
          offer: lang === "ar" ? "العرض العمالقه" : "Giants offer",
        },
        {
          id: 3,
          offer: lang === "ar" ? "عرض 3" : "Offer 3",
        },
      ],
      /* العرض */
      offer: {
        title: lang === "ar" ? "العرض" : "Offer",
        offerName: {
          label: "اسم العرض",
          placeholder: "اكتب اسم العرض",
        },
        investmentAmount: {
          label: "مبلغ الاستثمار",
          placeholder: "$0000000",
        },
        currency: {
          label: "العمله ",
          placeholder: "العمله",
        },
        offerDetails: {
          label: "تفاصيل العرض",
          placeholder: "اكتب تفاصيل العرض",
        },
        addedValue: {
          label: " القيمة المضافه",
          placeholder: "اكتب القيمة المضافه ",
        },
        selectionCriteria: {
          label: " معايير الاختيار",
          placeholder: " اكتب معايير الاختيار مثال ان تكون فكرة الشخص مبتكره ",
        },
      },

      /* المقابل */
      commission: {
        title: lang === "ar" ? "المقابل" : "Return",
        options: [
          {
            id: 1,
            option: lang === "ar" ? "عمولة" : "Commission",
          },
          {
            id: 2,
            option: lang === "ar" ? "حصة من المشروع" : "Share of the project",
          },
          {
            id: 3,
            option:
              lang === "ar"
                ? " نسبه من ارباح المشروع"
                : "A percentage of the profits of the project",
          },
          {
            id: 4,
            option: lang === "ar" ? " حق انتفاع" : "usufruct right ",
          },
          {
            id: 5,
            option:
              lang === "ar"
                ? " صوت في مجلس الاداره"
                : "A vote in the board of directors",
          },
          {
            id: 6,
            option: lang === "ar" ? "اخري" : "Other",
          },
        ],
        description: {
          label: "تفاصيل المقابل",
          placeholder: "اكتب المزيد من التفاصيل عن المقابل",
        },
      },
    },
    /* توزيعة العروض و المشروعات */
    distributionOfOffers: {
      title:
        lang === "ar"
          ? "توزيعه العروض والمشروعات"
          : "Distribution of offers and projects",
      distributions: [
        {
          id: 1,
          title: lang === "ar" ? " 1 توزيعه " : "Distribution 1",
        },
        {
          id: 2,
          title: lang === "ar" ? "2 توزيعه" : "Distribution 2",
        },
        {
          id: 3,
          title: lang === "ar" ? "3 توزيعه" : "Distribution 3",
        },
      ],

      targetedProjects: [
        {
          id: 1,
          title: lang === "ar" ? "اي مشروع " : "Any project",
        },
        {
          id: 2,
          title: lang === "ar" ? "مشروع 1" : "project 1",
        },
        {
          id: 3,
          title: lang === "ar" ? "مشروع 2" : "project 2",
        },
        {
          id: 4,
          title: lang === "ar" ? "مشروع 3" : "project 3",
        },
        {
          id: 5,
          title: lang === "ar" ? "مشروع 4" : "project 4",
        },
      ],

      correspondingOffers: [
        {
          id: 1,
          offer: lang === "ar" ? "العرض الاول" : "First offer",
        },
        {
          id: 2,
          offer: lang === "ar" ? "العرض العمالقه" : "Giants offer",
        },
        {
          id: 3,
          offer: lang === "ar" ? "عرض 3" : "Offer 3",
        },
      ],
    },
  };
}
