import { defineConfig } from 'vite'
import {
	GitChangelog,
	GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
	vite: {
		plugins: [
			GitChangelog({
				// 填写在此处填写您的仓库链接
				repoURL: () => 'https://github.com/WHUDAYS/WHUDAYS.github.io',
			}),
			GitChangelogMarkdownSection({
				sections: {
					disableContributors: true, // 关闭贡献者
					// disableChangelog: true, // 关闭 changelog
				}
			}),
		],
	},
	// 站点级选项
	lang: 'zh-CN',
	title: "武汉大学动漫协会-WHUDAYS", // 网站标题
	description: "武汉大学动漫协会", // 网站描述
	sitemap: {
		hostname: "https://whudays.github.io/", // 网站域名
	},
	head: [
		['meta', { name: 'keywords', content: '武汉大学动漫协会, 武大漫协, WHUDAYS, ACGN, 动漫社团, 武汉大学' }],
		['link', { rel: 'icon', href: '/favicon.ico' }],
		[
			'script',
			{
				async: '',
				src: 'https://www.googletagmanager.com/gtag/js?id=G-LQLQ2CEQ64'
			}
		],
		[
			'script',
			{},
			"window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-LQLQ2CEQ64');"
		]
	],

	themeConfig: {
		// 主题级选项
		nav: [
			{ text: '首页', link: '/' },
			{ text: '关于', link: '/about/' },
			{ text: '活动', link: '/activity/' },
			{ text: '部门', link: '/department/' },
			{ text: '小群', link: '/group/' },
			{ text: '留声箱', link: "/message-box/" }
		],
		sidebarMenuLabel: '菜单',
		returnToTopLabel: '回到顶部',
		sidebar: {
			'/about/': [
				{
					text: "关于社团",
					collapsed: false,
					items: [
						{ text: "关于本站", link: "/about/" },
						{ text: "社团介绍", link: "/about/introduction" },
						{ text: "英灵殿", link: "/about/hq/" },
						{ text: "历年大群", link: "/about/annual-group" }
					]
				},
				{
					text: "萌新指南",
					collapsed: false,
					items: [
						{ text: "2024萌新指南", link: "/about/newbie-guide/2024/" },
						{ text: "一、武大漫协Q&A", link: "/about/newbie-guide/2024/01-faq" },
						{ text: "二、武大漫协大群群规", link: "/about/newbie-guide/2024/02-rules" },
						{ text: "三、关注武大漫协官方账号", link: "/about/newbie-guide/2024/03-official-accounts" },
						{ text: "四、2024萌新指南（pdf）", link: "/about/newbie-guide/2024/04-raw" }
					]
				},
			],
			'/activity/': [
				{
					text: "社团活动",
					collapsed: false,
					items: [
						{ text: "漫协大事记", link: "/activity/" },
						{
							text: "冬日祭系列",
							collapsed: false,
							items: [
								{ text: "第十三届冬日祭（2024）", link: "/activity/2024/winter-festival" },
								{ text: "第四届冬日祭（2015）", link: "/activity/2015/winter-festival" },
								{ text: "第三届冬日祭（2014）", link: "/activity/2014/winter-festival" },
								{ text: "第二届冬日祭（2013）", link: "/activity/2013/winter-festival" },
								{ text: "第一届冬日祭（2012）", link: "/activity/2012/winter-festival" },
							]
						},
					]
				},
			],
			'/department/': [
				{
					text: "社团部门",
					collapsed: false,
					items: [
						{ text: "部门简介", link: "/department/" },
						{ text: "暗部", link: "/department/dark/" },
						{ text: "演音部", link: "/department/va/" },
						{
							text: "夏樱乐团",
							collapsed: true,
							items: [
								{ text: "夏樱乐团", link: "/department/band/" },
								{ text: "管弦组", link: "/department/band/orchestra/" },
							]
						},
						{ text: "cos部", link: "/department/cos/" },
						{ text: "编辑部", link: "/department/edit/" },
						{ text: "wota艺部", link: "/department/wota/" }
					]
				}
			],
			'/group/': [
				{
					text: "社团小群",
					collapsed: false,
					items: [
						{ text: "小群简介", link: "/group/" },
						{ text: "WHUDAYS Galgame Party", link: "/group/galgame/" },
					]
				}
			],
			'/message-box/': [
				{
					text: "留声箱",
					collapsed: false,
					items: [
						{ text: "喵呜", link: "/message-box/" },
					]
				}
			]
		},
		lastUpdated: {
			text: "最后更新",
			formatOptions: {
				dateStyle: "medium",
				timeStyle: "short"
			}
		},
		docFooter: {
			prev: "上一页",
			next: "下一页"
		},
		search: {
			provider: "local",
		}
	}
})