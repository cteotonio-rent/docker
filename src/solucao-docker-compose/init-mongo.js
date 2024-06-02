db = db.getSiblingDB('db_rent_prod');

db.user.updateOne(
    { Email: 'admin@admin.com' }, 
    {
        $set:
        {
            Active: true,
            CreateOn: new Date(),
            Name: 'Admin',
            Email: 'admin@admin.com',
            Password: 'FA585D89C851DD338A70DCF535AA2A92FEE7836DD6AFF1226583E88E0996293F16BC009C652826E0FC5C706695A03CDDCE372F139EFF4D13959DA6F1F5D3EABE',
            UserUniqueIdentifier: Binary.createFromBase64('heGiSFxHVEWKeVYfBWY78w==', 3),
            UserType: 0,
			Available: true,
			nrle: "987654321",
			dateOfBirth: "2024-06-01",
            driversLicense: "423429999",
            driversLicenseCategory: "A"
        }
    }, 
    { upsert: true } 
);

db.rentalplan.bulkWrite([
    {
        updateOne: {
            filter: { DurationInDays: 7 },
            update: {
                $setOnInsert:
                {
                    Active: true,
                    CreateOn: new Date(),
                    Name: '7 dias com um custo de R$30,00 por dia',
                    Price: 30.0,
                    DurationInDays: 7,
                    DailyFineNotApplied: 0.2,
                    AdditionalDailyFine: 50.0
                }
            },
            upsert: true
        }
    },
    {
        updateOne: {
            filter: { DurationInDays: 15 },
            update: {
                $setOnInsert:
                {
                    Active: true,
                    CreateOn: new Date(),
                    Name: '15 dias com um custo de R$28,00 por dia',
                    Price: 28.0,
                    DurationInDays: 15,
                    DailyFineNotApplied: 0.40,
                    AdditionalDailyFine: 50.0
                }
            },
            upsert: true
        }
    },
    {
        updateOne: {
            filter: { DurationInDays: 30 },
            update: {
                $setOnInsert:
                {
                    Active: true,
                    CreateOn: new Date(),
                    Name: '30 dias com um custo de R$22,00 por dia',
                    Price: 22.0,
                    DurationInDays: 30,
                    DailyFineNotApplied: 0.60,
                    AdditionalDailyFine: 50.0
                }
            },
            upsert: true
        }
    }
]);